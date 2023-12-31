import { Itim } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ReactAudioPlayer from "react-audio-player";

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
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-theme-white px-4">
      <div className="relative ml-4 min-h-[550px] w-[95%] max-w-sm rounded-3xl bg-theme-primary shadow-xl">
        <div className="bg-whte absolute -left-2 -top-2 flex min-h-[550px]  w-full flex-col rounded-3xl bg-white px-8 py-7 shadow-xl">
          <h1
            className={twMerge(
              "mb-10 px-2 text-center text-2xl",
              itim.className,
            )}
          >
            Seja bem vindo Murillo!
          </h1>

          <p className="mb-4 text-sm">Eae, Kamilly?</p>
          <p className="mb-8 flex-1 text-sm">
            Parabéns pela chegada do Murillo! Tenho certeza de que ele vai ser
            um garotinho incrível e cheio de energia. Desejo muita saúde, amor e
            todas as coisas boas do mundo para vocês. Que o Murillo cresça
            sempre cercado de carinho e alegria. E ó, qualquer coisa que
            precisar, estamos aí!
          </p>

          <audio controls className="w-full">
            <source src="/audio.mp3" type="audio/mpeg" />
          </audio>

          <Image
            src={duck_img}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute -left-4 -top-4 h-auto w-14 -rotate-12"
            alt={"Bear"}
          />

          <Image
            src={blocks_img}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute -right-6 bottom-8 h-auto w-8 rotate-12"
            alt={"Bear"}
          />
        </div>

        <Image
          src={cloud_img}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-0 top-8 h-auto w-12 -rotate-12"
          alt={"Bear"}
        />
      </div>
    </main>
  );
}
