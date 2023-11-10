import { Itim } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });

import {
  bear_img,
  blocks_img,
  cloud_img,
  dice_img,
  duck_img,
  feeding_bottle,
  hood,
  pacifier,
  star,
} from "@/utils/exportImages";

export default function Home() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-theme-white">
      <div className="relative h-[80%] w-[95%] max-w-md rounded-3xl bg-white p-7 shadow-lg">
        <h1 className={twMerge("text-center text-2xl", itim.className)}>
          Seja bem vindo Murillo!
        </h1>

        <Image
          src={duck_img}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute -left-4 -top-4 h-auto w-12 -rotate-12"
          alt={"Bear"}
        />

        <Image
          src={blocks_img}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute h-auto w-12 -rotate-12"
          alt={"Bear"}
        />
      </div>

      <Image
        src={cloud_img}
        width={0}
        height={0}
        sizes="100vw"
        className="absolute h-auto w-12 -rotate-12"
        alt={"Bear"}
      />
    </main>
  );
}
