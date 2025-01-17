interface IDetailItem {
  label: string;
  value: string;
}

const DetailItem = ({ label, value }: IDetailItem) => {
  return (
    <div>
      <p className="text-lg">{label}</p>
      <p className="capitalize text-[#7E7E7E]">{value.split("-").join(" ")}</p>
    </div>
  );
};

export default DetailItem;
