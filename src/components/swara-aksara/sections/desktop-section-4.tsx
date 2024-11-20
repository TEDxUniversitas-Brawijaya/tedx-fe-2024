import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { faqs } from "@/lib/static/aksara-swara";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";
import swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function DesktopSection4() {
  const swiperRef = useRef<swiper | null>(null);

  return (
    <section className="relative z-0 bg-tedx-green text-center text-white">
      <div className="sticky left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-10 overflow-clip pb-20 pt-32">
        <div className="absolute top-0 h-full w-full opacity-35">
          <Image src={"/img/paper-texture-5.png"} alt="Paper Texture" fill />
        </div>
        <div className="z-10 flex w-full flex-col items-center justify-center gap-8 px-20">
          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            <SwiperSlide className="z-0 aspect-[400/485] w-52">
              <div className="size-full">
                <Image
                  src={"/img/faq-card-cover.png"}
                  alt="FAQ Card Cover"
                  fill
                />
              </div>
            </SwiperSlide>
            {faqs.map((faq) => {
              return (
                <SwiperSlide
                  className="z-0 aspect-[400/485] w-52 xl:w-32"
                  key={faq.question}
                >
                  <div className="top-0 z-10 flex w-full flex-col items-center justify-start gap-8 px-10 pt-16 text-black">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <h2 className="text-lg">{faq.answer}</h2>
                  </div>
                  <div className="absolute top-0 -z-10 h-full w-full">
                    <Image
                      src={"/img/faq-card-page.png"}
                      alt="FAQ Card Cover"
                      fill
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex w-full flex-row items-center justify-center gap-4">
            <button
              className="rounded-lg bg-[#E4CA48] px-6 py-2 text-black"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              className="rounded-lg bg-[#E4CA48] px-6 py-2 text-black"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
