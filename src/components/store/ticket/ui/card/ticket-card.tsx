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
    <Link href={redirectUrl}>
      <div className="flex h-[440px] w-[480px] flex-col justify-between rounded-[32px] bg-[#1D1A1B] px-12 py-10 text-white">
        <div className="flex items-center justify-between">
          <p>
            {startDate}-{endDate}
          </p>
          {amount <= 10 && (
            <p className="italic text-[#05D126]">Sisa {amount}</p>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-[72px] italic">{title}</h3>
          <p className="text-white/40">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
