import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/* Hackathon starts on 24 April 2026 at 9:00 AM IST */
const TARGET_DATE = new Date("2026-04-24T09:00:00+05:30");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE.getTime() - now;

      if (difference <= 0) {
        setIsLive(true);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /* LIVE MODE */

  if (isLive) {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />

        <span className="font-heading text-xl sm:text-2xl md:text-3xl neon-text tracking-wider text-center">
          Hackathon Live Now 🚀
        </span>
      </div>
    );
  }

  if (!timeLeft) return null;

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-5">

      {/* Event Date */}

      <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] text-center">
        Starts on 24 April 2026 • 9:00 AM IST
      </p>

      {/* Countdown Boxes */}

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="
              glass-card
              text-center
              px-4 py-3
              sm:px-5 sm:py-4
              md:px-6 md:py-5
              min-w-[70px]
              sm:min-w-[80px]
              md:min-w-[100px]
            "
          >
            <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold neon-text">
              {String(block.value).padStart(2, "0")}
            </div>

            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;