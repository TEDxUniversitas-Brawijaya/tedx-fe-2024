import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface ActionFooterProps {
  primaryText?: string;
  secondaryText?: string;
  primaryProps?: ButtonProps;
  secondaryProps?: ButtonProps;
  primaryClassName?: string;
  secondaryClassName?: string;
}

export function ActionFooter({
  primaryText = "Submit",
  secondaryText = "Cancel",
  primaryProps,
  secondaryProps,
  primaryClassName,
  secondaryClassName,
}: ActionFooterProps) {
  return (
    <div className="mt-6 flex w-full justify-end space-x-2">
      <Button
        variant="outlineRed"
        className={cn("flex-1 text-white", primaryClassName)}
        {...secondaryProps}
      >
        {secondaryText}
      </Button>
      <Button
        variant="defaultRed"
        className={cn("flex-1 text-white", secondaryClassName)}
        {...primaryProps}
      >
        {primaryText}
      </Button>
    </div>
  );
}
