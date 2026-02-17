"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const games = [
  { name: "VALORANT", logo: "/games/valorant.png" },
  { name: "CLASH OF CLANS", logo: "/games/clash-of-clans.png" },
  { name: "LEAGUE OF LEGENDS", logo: "/games/league-of-legends.png" },
  { name: "PUBG MOBILE", logo: "/games/pubg-mobile.png" },
  { name: "FREE FIRE MAX", logo: "/games/free-fire-max.png" },
  { name: "CLASH ROYALE", logo: "/games/clash-royale.png" },
  { name: "POKÉMON UNITE", logo: "/games/pokemon-unite.png" },
  { name: "BGMI", logo: "/games/bgmi.jpeg" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12 group cursor-default select-none">
      <Image
        src={logo}
        alt={name}
        width={52}
        height={52}
        className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
        draggable={false}
      />
    </div>
  );
}

export default function LEDTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  const SPEED = 1.5;

  const allLogos = [...games, ...games];

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (track) {
      offsetRef.current += SPEED;
      const halfWidth = track.scrollWidth / 2;
      if (offsetRef.current >= halfWidth) {
        offsetRef.current -= halfWidth;
      }
      track.style.transform = `translateX(${-offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <div className="led-ticker-wrap py-4 md:py-5 relative overflow-hidden">
      <div ref={trackRef} className="flex will-change-transform">
        {allLogos.map((game, i) => (
          <LogoItem key={`${game.name}-${i}`} name={game.name} logo={game.logo} />
        ))}
      </div>
    </div>
  );
}
