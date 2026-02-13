"use client";

const games = [
  "VALORANT",
  "CLASH OF CLANS",
  "LEAGUE OF LEGENDS",
  "PUBG MOBILE",
  "FREE FIRE MAX",
  "CLASH ROYALE",
  "POKÉMON UNITE",
  "BGMI",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-4 mx-6 md:mx-10 group cursor-default select-none">
      {/* Stylized icon */}
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-sm border border-[#A020F0]/20 flex items-center justify-center bg-[#A020F0]/[0.03] group-hover:bg-[#A020F0]/[0.08] group-hover:border-[#A020F0]/40 transition-all duration-500 relative overflow-hidden">
        <span className="font-heading font-black text-xs text-[#A020F0]/40 group-hover:text-[#A020F0]/80 transition-colors duration-500">
          {name.charAt(0)}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#A020F0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <span
        className="text-[11px] md:text-xs font-heading font-bold tracking-[0.18em] uppercase text-[#555568] group-hover:text-[#A020F0]/80 transition-all duration-500 whitespace-nowrap"
      >
        {name}
      </span>
      {/* Separator dot */}
      <div className="w-1 h-1 rounded-full bg-[#A020F0]/20 group-hover:bg-[#FF00FF]/40 transition-colors ml-2" />
    </div>
  );
}

export default function LEDTicker() {
  const allLogos = [...games, ...games, ...games, ...games];

  return (
    <div className="led-ticker-wrap py-4 md:py-5 relative">
      <div className="flex animate-ticker">
        {allLogos.map((logo, i) => (
          <LogoItem key={`${logo}-${i}`} name={logo} />
        ))}
      </div>
    </div>
  );
}
