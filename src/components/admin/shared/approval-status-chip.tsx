export default function ApprovalStatusChip({
  status,
}: {
  status: "pending" | "accepted" | "rejected";
}) {
  let formattedStatus = "";
  let color = "bg-amber-100/55 text-amber-600";

  switch (status) {
    case "pending":
      formattedStatus = "Pending";
      break;
    case "accepted":
      formattedStatus = "Accepted";
      color = "bg-emerald-100 text-emerald-600";
      break;
    case "rejected":
      formattedStatus = "Rejected";
      color = "bg-rose-100 text-rose-600";
      break;
  }

  return (
    <div
      className={`rounded-full px-4 py-1 text-center text-xs font-medium ${color}`}
    >
      {formattedStatus}
    </div>
  );
}
