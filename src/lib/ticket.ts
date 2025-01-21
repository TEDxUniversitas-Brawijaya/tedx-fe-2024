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
