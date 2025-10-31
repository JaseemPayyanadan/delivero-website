"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

type Client = { image: string; name: string };

const clients: Client[] = [
  { image: "/window.svg", name: "Client A" },
  { image: "/globe.svg", name: "Client B" },
  { image: "/next.svg", name: "Client C" },
  { image: "/vercel.svg", name: "Client D" },
  { image: "/file.svg", name: "Client E" },
];

export default function ClientCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          1024: { slidesPerView: 2.2, spaceBetween: 24 },
        }}
        className="pb-8!"
      >
        {clients.map((c, idx) => (
          <SwiperSlide key={idx} aria-label={c.name}>
            <div className="aspect-4/3 w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md ring-1 ring-black/5 dark:border-white/10 dark:bg-[#0f1112] dark:ring-white/5">
              <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev h-10! w-10! rounded-full! border! border-black/10! bg-white! text-black! dark:border-white/10! dark:bg-[#0f1112]!">
          <span className="sr-only">Previous</span>
        </div>
        <div className="swiper-button-next h-10! w-10! rounded-full! border! border-black/10! bg-white! text-black! dark:border-white/10! dark:bg-[#0f1112]!">
          <span className="sr-only">Next</span>
        </div>
      </Swiper>
    </div>
  );
}


