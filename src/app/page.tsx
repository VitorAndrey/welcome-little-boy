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
    <main>
      <h1 className={twMerge("text-3xl", itim.className)}>
        Seja bem vindo Murillo!
      </h1>
    </main>
  );
}
