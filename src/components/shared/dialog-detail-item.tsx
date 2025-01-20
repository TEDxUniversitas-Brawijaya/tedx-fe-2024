interface IDialogDetailItem {
  label: string;
  value: string;
}

const DialogDetailItem = ({ label, value }: IDialogDetailItem) => {
  return (
    <div>
      <p className="text-lg">{label}</p>
      <p className="capitalize text-[#7E7E7E]">{value.split("-").join(" ")}</p>
    </div>
  );
};

export default DialogDetailItem;
