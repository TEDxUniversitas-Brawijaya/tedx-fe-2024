import { ITicketInformation } from "@/types/ticket-types";

export const getTicketNotes = (name: string) => {
  switch (name) {
    case "Main Event":
      return "Note : kamu memilih tipe regular ( Ticket main event )";

    case "Propaganda 3 Day 1":
      return "Note : kamu memilih tipe regular ( Ticket day 1 propaganda 3 )";

    case "Propaganda 3 Day 2":
      return "Note : kamu memilih tipe regular ( Ticket day 1 propaganda 3 )";

    case "Propaganda 3 Day 3":
      return "Note : kamu memilih tipe regular ( Ticket day 1 propaganda 3 )";

    case "Ticket Bundling 1 Day 1":
      return "Note : kamu memilih tipe bundling ( Ticket main event & day 1 propaganda 3 )";

    case "Ticket Bundling 1 Day 2":
      return "Note : kamu memilih tipe bundling ( Ticket main event & day 2 propaganda 3 )";

    case "Ticket Bundling 1 Day 3":
      return "Note : kamu memilih tipe bundling ( Ticket main event & day 3 propaganda 3 )";

    default:
      break;
  }
};

interface IFormatOptions {
  separator?: string;
  removeNumbers?: boolean;
  preserveNumbers?: boolean;
}

export const formtTicketProperties = (
  text: string,
  options: IFormatOptions = {},
): string => {
  const {
    separator = "-",
    removeNumbers = false,
    preserveNumbers = false,
  } = options;

  let formatted = text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    // Replace multiple spaces with single space
    .replace(/\s+/g, " ")
    .trim();

  if (removeNumbers) {
    formatted = formatted.replace(/\d+/g, "");
  } else if (preserveNumbers) {
    // Remove spaces between word and number
    formatted = formatted.replace(/(\d+)\s+(?=\w)|(\w)\s+(?=\d+)/g, "$1$2");
  }

  return formatted.replace(/\s/g, separator);
};

export const getActiveTicketBundle = (
  data: ITicketInformation,
  event: string,
  bundleNumber: string,
) => {
  const dayNumber = event.match(/\d+$/)?.[0];

  if (!dayNumber) return null;

  const bundlingKey =
    `ticketBundling${bundleNumber}` as keyof ITicketInformation;

  const bundlingTickets = data[bundlingKey];

  if (!bundlingTickets) return null;

  const activeTicket = bundlingTickets.find((ticket) => {
    const isDayMatch = ticket.name.toLowerCase().includes(`day ${dayNumber}`);
    return !ticket.isExpired && isDayMatch;
  });

  return activeTicket || null;
};
