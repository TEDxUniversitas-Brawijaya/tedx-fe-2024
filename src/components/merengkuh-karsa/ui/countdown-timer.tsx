"use client";

import { useCountdown } from "@/hooks/useCountdown";
import useMounted from "@/hooks/useMounted";

export default function CountdownTimer() {
  const mounted = useMounted();

  const { days, hours, minutes, seconds } = useCountdown(
    new Date(2025, 0, 19, 12, 0, 0),
  );

  if (!mounted)
    return (
      <h3 className="font-header text-5xl lg:text-9xl font-bold text-tedx-red">
        --:--:--:--
      </h3>
    );

  return (
    <h3 className="font-header text-5xl font-bold text-tedx-red lg:text-9xl">
      {days}:{hours}:{minutes}:{seconds}
    </h3>
  );
}
