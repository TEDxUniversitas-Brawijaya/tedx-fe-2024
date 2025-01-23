interface IDialogDetailItem {
  label: string;
  value: string;
  capitalize?: boolean;
}

const DialogDetailItem = ({
  label,
  value,
  capitalize = true,
}: IDialogDetailItem) => {
  return (
    <div>
      <p className="text-lg">{label}</p>
      <p className={`${capitalize ? "capitalize" : ""} text-[#7E7E7E]`}>
        {value.split("-").join(" ")}
      </p>
    </div>
  );
};

export default DialogDetailItem;
