import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";
import swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { faqs } from "../../../lib/static/aksara-swara";

export default function DesktopSection4() {
  const swiperRef = useRef<swiper | null>(null);

  return (
    <section className="relative z-0 h-[80vh] bg-tedx-green text-center text-white">
      <div className="sticky left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-10 overflow-clip">
        <div className="absolute top-0 h-full w-full opacity-50">
          <Image src={"/img/paper-texture-5.png"} alt="Paper Texture" fill />
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper w-[1264px]"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide className="">
              <div className="h-[485px] w-[400px]">
                <Image
                  src={"/img/faq-card-cover.png"}
                  alt="FAQ Card Cover"
                  fill
                />
              </div>
            </SwiperSlide>
            {faqs.map((faq) => {
              return (
                <SwiperSlide className="h-[485px] w-[400px]" key={faq.question}>
                  <div className="absolute top-0 z-10 m-20 flex w-[240px] flex-col items-center justify-start gap-8 text-black">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <h2 className="text-xl">{faq.answer}</h2>
                  </div>
                  <div className="absolute h-full w-full">
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
