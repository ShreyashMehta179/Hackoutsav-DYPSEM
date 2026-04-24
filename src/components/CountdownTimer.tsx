import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

/*
Hackathon starts:
24 April 2026 - 9:00 AM IST

Hackathon ends:
25 April 2026 - 9:00 AM IST
*/

const START_DATE = new Date("2026-04-24T09:00:00+05:30");
const END_DATE = new Date("2026-04-25T09:00:00+05:30");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isBeforeStart, setIsBeforeStart] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();

      const start = START_DATE.getTime();
      const end = END_DATE.getTime();

      // Before event starts
      if (now < start) {
        setIsBeforeStart(true);
        setIsLive(false);
        setIsEnded(false);

        const difference = start - now;

        const hours = Math.floor(
          difference / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
          (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
          (difference / 1000) % 60
        );

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });

        return;
      }

      // During hackathon (24 Hours)
      if (now >= start && now < end) {
        setIsBeforeStart(false);
        setIsLive(true);
        setIsEnded(false);

        const difference = end - now;

        const hours = Math.floor(
          difference / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
          (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
          (difference / 1000) % 60
        );

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });

        return;
      }

      // Event ended
      setIsBeforeStart(false);
      setIsLive(false);
      setIsEnded(true);
      setTimeLeft(null);
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft && !isEnded) return null;

  // Event Ended
  if (isEnded) {
    return (
      <div className="text-center font-heading text-2xl neon-text">
        Hackathon Completed 🎉
      </div>
    );
  }

  const blocks = [
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}

      <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] text-center">
        {isBeforeStart
          ? "Hackathon Starts On 24 April • 9:00 AM IST"
          : "Hackathon Ends On 25 April • 9:00 AM IST"}
      </p>

      {/* Live Badge */}

      {isLive && (
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />

          <span className="font-heading text-lg sm:text-xl neon-text">
            Live • 24 Hour Countdown 🚀
          </span>
        </div>
      )}

      {/* Timer */}

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
              min-w-[90px]
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