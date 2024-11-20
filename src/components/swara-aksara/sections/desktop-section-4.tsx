import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { faqs } from "@/lib/static/aksara-swara";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef, useState } from "react";
import SwiperType from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function DesktopSection4() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

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
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
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
          <div className="flex w-full flex-row items-center justify-center gap-4 text-tedx-black">
            <button
              disabled={isBeginning}
              className={`flex h-10 w-16 items-center justify-center rounded-lg bg-tedx-yellow transition-all duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:text-neutral-600 disabled:hover:bg-neutral-500`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              disabled={isEnd}
              className={`flex h-10 w-16 items-center justify-center rounded-lg bg-tedx-yellow transition-all duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:text-neutral-600 disabled:hover:bg-neutral-500`}
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
