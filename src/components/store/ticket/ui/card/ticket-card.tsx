import { formatToRupiah } from "@/lib/helpers/formatToRupiah";
import Link from "next/link";

interface ITicketCard {
  startDate: string;
  endDate: string;
  amount: number;
  title: string;
  description: string;
  redirectUrl: string;
  price: number;
}

const TicketCard = ({
  startDate,
  endDate,
  amount,
  title,
  description,
  redirectUrl,
  price,
}: ITicketCard) => {
  return (
    <Link
      href={amount > 0 ? redirectUrl : "#"}
      replace
      className={`group relative ${amount > 0 ? "" : "pointer-events-none cursor-not-allowed opacity-50"}`}
    >
      <div className="absolute left-0 top-0 z-20 h-[380px] w-[320px] rounded-[32px] bg-gradient-to-tr from-tedx-red/50 from-10% to-[#1D1A1B] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:h-[340px] md:w-[360px] lg:h-[440px] lg:w-[480px]" />
      <div className="flex h-[380px] w-[320px] flex-col justify-between rounded-[32px] border-gray-400 bg-[#1D1A1B] px-6 py-10 text-white transition-colors duration-1000 md:h-[340px] md:w-[360px] md:px-12 lg:h-[440px] lg:w-[480px]">
        <div className="z-30 flex items-center justify-between">
          <p>
            {startDate} - {endDate}
          </p>
          {amount <= 10 && amount > 0 && (
            <p className="italic text-[#05D126]">Sisa {amount}</p>
          )}
          {amount <= 0 && <p className="italic text-tedx-red/80">Sold Out</p>}
        </div>
        <div className="z-30 space-y-4">
          <h3 className="text-4xl italic md:text-5xl">{title}</h3>
          <p className="text-xl text-white/70 md:text-2xl">
            {formatToRupiah(price)}
          </p>
          <p className="text-[14px] text-white/40 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
