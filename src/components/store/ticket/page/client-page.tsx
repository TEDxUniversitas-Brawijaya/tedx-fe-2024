import Footer from "@/components/shared/footer";
import { IGetTicketInfoResponse } from "@/types/ticket-types";
import Section1 from "../sections/section-1";
import Section2 from "../sections/section-2";

const ClientTicketPage = ({ data }: { data: IGetTicketInfoResponse }) => {
  return (
    <main>
      <div className="relative">
        <Section1 />
        <Section2 data={data} />
        <div className="absolute bottom-0 left-0 top-0 h-full min-h-screen w-full bg-gradient-to-b from-[#610017] via-[#131012] via-80% to-[#131012]" />
      </div>
      <Footer />
    </main>
  );
};

export default ClientTicketPage;
