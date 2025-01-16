"use client";

import { useCountdown } from "@/hooks/useCountdown";
import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

interface ICountdownTimer {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimer({
  targetDate,
  className,
}: ICountdownTimer) {
  const mounted = useMounted();
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  if (!mounted) {
    return <h3 className={cn(className)}>--:--:--:--</h3>;
  }

  return (
    <h3 className={cn(className)}>
      {days}:{hours}:{minutes}:{seconds}
    </h3>
  );
}
