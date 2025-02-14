"use client";

import { useCountdown } from "@/hooks/useCountdown";
import useMounted from "@/hooks/useMounted";

export default function CountdownTimer() {
  const mounted = useMounted();

  const { days, hours, minutes, seconds } = useCountdown(
    new Date(2025, 1, 22, 10, 0, 0),
  );

  if (!mounted)
    return (
      <h3 className="font-header text-6xl font-bold text-tedx-red lg:text-7xl">
        --:--:--:--
      </h3>
    );

  return (
    <h3 className="font-header text-5xl font-bold text-tedx-red md:text-6xl lg:text-7xl">
      {days}:{hours}:{minutes}:{seconds}
    </h3>
  );
}
