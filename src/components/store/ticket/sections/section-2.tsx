import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs";
import { getAllTicketInfo } from "@/repository/actions/ticket-service";
import TicketCard from "../ui/card/ticket-card";

const Section2 = async () => {
  const data = await getAllTicketInfo();

  // TODO remove this upon integration
  console.log(data);

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
        <TabsContent value="regular">
          <div className="flex flex-col gap-4 md:flex-row">
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={5}
              title="Propa 3"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="/form/ticket?type=propa-3"
            />
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={5}
              title="Main Event"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="/form/ticket?type=main-event"
            />
          </div>
        </TabsContent>
        <TabsContent value="bundling">
          <div className="flex flex-col gap-4 md:flex-row">
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={10}
              title="Propa 3"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="/form/ticket-bundle?type=propa-3"
            />
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={11}
              title="Main Event"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="/form/ticket?type=main-event"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Section2;
