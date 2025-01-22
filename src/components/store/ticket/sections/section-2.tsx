import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs";
import TicketCard from "../ui/card/ticket-card";
import { useTickets } from "@/hooks/use-ticket";
import { formatResponseDate } from "@/lib/date";
import { IGetTicketInfoResponse } from "@/types/ticket-types";

const Section2 = ({ data }: { data: IGetTicketInfoResponse }) => {
  const { ticketInformations } = data;

  const { regularTickets, bundlingTickets } = useTickets(ticketInformations);

  return (
    <section className="relative z-10 mt-[100px] w-full pb-[140px]">
      <h2 className="text-center font-header text-4xl text-white md:text-5xl lg:text-6xl">
        Dapatkan Tiket
      </h2>
      <Tabs
        defaultValue="regular"
        className="mt-10 flex w-full flex-col items-center gap-6 px-10 md:px-[80px] lg:px-[120px]"
      >
        <TabsList>
          <TabsTrigger value="regular">Regular</TabsTrigger>
          <TabsTrigger value="bundling">Bundling</TabsTrigger>
        </TabsList>

        {/* Regular Tickets */}
        <TabsContent value="regular">
          <div className="flex flex-wrap justify-center gap-4">
            {regularTickets.mainEventTicket ||
            Object.values(regularTickets.propagandaDays).some(
              (ticket) => ticket,
            ) ? (
              <>
                {regularTickets.mainEventTicket && (
                  <TicketCard
                    startDate={formatResponseDate(
                      regularTickets.mainEventTicket.startDate,
                    )}
                    endDate={formatResponseDate(
                      regularTickets.mainEventTicket.endDate,
                    )}
                    amount={regularTickets.mainEventTicket.stock}
                    title="Main Event"
                    description={regularTickets.mainEventTicket.description}
                    redirectUrl="/form/ticket?event=main-event"
                  />
                )}
                {Object.entries(regularTickets.propagandaDays).map(
                  ([day, ticket]) =>
                    ticket && (
                      <TicketCard
                        key={ticket.id}
                        startDate={formatResponseDate(ticket.startDate)}
                        endDate={formatResponseDate(ticket.endDate)}
                        amount={ticket.stock}
                        title={`Propaganda 3 Day ${day.slice(-1)}`}
                        description={ticket.description}
                        redirectUrl={`/form/ticket?event=propa-3-day${day.slice(-1)}`}
                      />
                    ),
                )}
              </>
            ) : (
              <p className="text-center text-lg text-white">
                Tidak ada tiket regular yang tersedia saat ini
              </p>
            )}
          </div>
        </TabsContent>

        {/* Bundling Tickets */}
        <TabsContent value="bundling">
          <div className="flex flex-wrap justify-center gap-4">
            {bundlingTickets.mainEvent ||
            Object.values(bundlingTickets.propagandaDays).some(
              (ticket) => ticket,
            ) ? (
              <>
                {bundlingTickets.mainEvent && (
                  <TicketCard
                    startDate={formatResponseDate(
                      bundlingTickets.mainEvent.startDate,
                    )}
                    endDate={formatResponseDate(
                      bundlingTickets.mainEvent.endDate,
                    )}
                    amount={bundlingTickets.mainEvent.stock}
                    title="Main Event Bundle"
                    description={`${bundlingTickets.mainEvent.description}`}
                    redirectUrl="/form/ticket-bundle?event=main-event"
                  />
                )}
                {Object.entries(bundlingTickets.propagandaDays).map(
                  ([day, ticket]) =>
                    ticket && (
                      <TicketCard
                        key={ticket.id}
                        startDate={formatResponseDate(ticket.startDate)}
                        endDate={formatResponseDate(ticket.endDate)}
                        amount={ticket.stock}
                        title={`Propaganda 3 Day ${day.slice(-1)}`}
                        description={`${ticket.description}`}
                        // TODO: CHANGE BUNDLE TO DYNAMIC
                        redirectUrl={`/form/ticket-bundle?event=propa-3-day${day.slice(
                          -1,
                        )}&bundle=1`}
                      />
                    ),
                )}
              </>
            ) : (
              <p className="text-center text-lg text-white">
                Tidak ada bundling regular yang tersedia saat ini
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Section2;
