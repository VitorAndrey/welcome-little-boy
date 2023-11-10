import { Itim } from "next/font/google";
import { twMerge } from "tailwind-merge";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div>
      <h1 className={twMerge("text-3xl", itim.className)}>
        Seja bem vindo Murillo!
      </h1>
    </div>
  );
}
