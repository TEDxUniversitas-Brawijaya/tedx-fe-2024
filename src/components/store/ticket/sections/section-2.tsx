import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs";
import TicketCard from "../ui/card/ticket-card";

const Section2 = () => {
  return (
    <section className="relative z-10 mt-[100px] w-full pb-[140px]">
      <h2 className="text-center font-header text-6xl text-white">
        Dapatkan Tiket
      </h2>
      <Tabs
        defaultValue="regular"
        className="mt-10 flex w-full flex-col items-center gap-6 px-[120px]"
      >
        <TabsList>
          <TabsTrigger value="regular">Regular</TabsTrigger>
          <TabsTrigger value="bundling">Bundling</TabsTrigger>
        </TabsList>
        <TabsContent value="regular">
          <div className="flex gap-4">
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={5}
              title="Propa 3"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="form/ticket"
            />
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={5}
              title="Main Event"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="form/ticket"
            />
          </div>
        </TabsContent>
        <TabsContent value="bundling">
          <div className="flex gap-4">
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={10}
              title="Propa 3"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="form/ticket"
            />
            <TicketCard
              startDate="Jan 15, 2024"
              endDate="Feb 13, 2024"
              amount={11}
              title="Main Event"
              description="Rengkuh Karsa dalam dirimu, membakar keraguan, dan terus melangkah menuju perjalanan penuh makna."
              redirectUrl="form/ticket"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Section2;
