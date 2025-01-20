import Link from "next/link";

interface ITicketCard {
  startDate: string;
  endDate: string;
  amount: number;
  title: string;
  description: string;
  redirectUrl: string;
}

const TicketCard = ({
  startDate,
  endDate,
  amount,
  title,
  description,
  redirectUrl,
}: ITicketCard) => {
  return (
    <Link href={redirectUrl} replace>
      <div className="flex h-[380px] w-full flex-col justify-between rounded-[32px] bg-[#1D1A1B] px-6 py-10 text-white transition-all duration-150 hover:bg-[#1D1A1B]/80 md:h-[340px] md:w-[360px] md:px-12 lg:h-[440px] lg:w-[480px]">
        <div className="flex items-center justify-between">
          <p>
            {startDate}-{endDate}
          </p>
          {amount <= 10 && (
            <p className="italic text-[#05D126]">Sisa {amount}</p>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-5xl italic lg:text-[72px]">{title}</h3>
          <p className="text-white/40">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
