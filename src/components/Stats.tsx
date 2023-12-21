import { ReactNode } from "react";
import H2 from "./H2";

type StatsProps = {
  stats: {
    numberOfWords: number,
    numberOfCharacters: number,
    instagramCharactersLeft: number,
    facebookCharactersLeft: number
  }
}

type StatProps = {
  number: number,
  label: ReactNode
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="grid grid-rows-2 grid-cols-2 md:w-1/2 h-full bg-[#f1f6f8] ">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }: StatProps) {
  return (
    <section className={"flex flex-col items-center justify-center stat"}>
      <span
        className={`text-[#4d5457] font-semibold text-4xl mb-3 ${number < 0 ? "text-red-600" : ""}`}
      >
        {number}
      </span>

      <H2>{label}</H2>
    </section>
  );
}