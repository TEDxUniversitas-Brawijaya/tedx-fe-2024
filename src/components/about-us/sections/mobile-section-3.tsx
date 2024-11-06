import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function MobileSection3() {
  const { scrollYProgress } = useScroll();

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.725, 0.75],
    [1, 1, 0, 0],
  );
  const opacityText2 = useTransform(
    scrollYProgress,
    [0, 0.65, 0.7, 0.75, 0.8, 0.825, 0.85],
    [0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText3 = useTransform(
    scrollYProgress,
    [0, 0.65, 0.7, 0.75, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText4 = useTransform(
    scrollYProgress,
    [0, 0.65, 0.7, 0.75, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );

  return (
    <section className="relative -z-20 h-[400vh] text-tedx-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center text-center">
        <Image
          src={"/img/bg-paper-black.png"}
          alt="Bg Black"
          fill
          className="-z-20"
        />

        <motion.div
          className="absolute z-20 flex h-full w-full items-center text-3xl font-bold"
          style={{ opacity: opacityText1 }}
        >
          <h2 style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.7)" }}>
            <span>Mantra Diri :</span>
            <br />
            <span className="font-header text-6xl">
              Menembus Batas, Menyelami Realitas.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="absolute z-20 flex h-full w-full items-center px-5 text-start font-medium opacity-0"
          style={{ opacity: opacityText2 }}
        >
          <p style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.7)" }}>
            Sejatinya setiap insan memiliki kebutuhan untuk menemukan jati
            dirinya. Tingkat tertinggi dalam hirarki kebutuhan manusia adalah
            aktualisasi diri. Dalam prosesnya, dibutuhkan penerimaan diri
            sebagai tahap awal menuju titik puncak aktualisasi diri. Setelah
            mengenal dan menerima dirinya, sebuah insan dapat melangkah ke tahap
            selanjutnya, yaitu memasuki proses aktualisasi diri. Aktualisasi
            diri merupakan keinginan dalam diri seorang insan untuk dapat
            menggapai segala bentuk pencapaian sesuai kapasitas dan potensinya.
            Dengan kata lain, aktualisasi diri juga bisa disebut sebagai proses
            “menjadi versi terbaik dari diri sendiri”.
          </p>
        </motion.div>
        <motion.div
          className="absolute z-20 flex h-full w-full items-center px-5 text-start font-medium opacity-0"
          style={{ opacity: opacityText3 }}
        >
          <p style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.7)" }}>
            Mencapai titik puncak terbaik dalam diri seseorang membutuhkan
            proses yang panjang dan tidak mudah. Diawali dengan pencarian
            motivasi, seorang insan membutuhkan dorongan untuk menemukan dan
            menentukan tujuan hidupnya sehingga dapat mengetahui arah untuk
            mengaktualisasikan dirinya. Ketika seorang insan berhasil menemukan
            motivasi dalam dirinya, mereka dapat melanjutkannya ke tahap di mana
            mereka harus mengenali dan menemukan potensi yang mereka miliki. Di
            tahap ini, seorang insan mulai mencari dan menentukan mana yang
            merupakan bakat mereka dan mana yang merupakan minat mereka. Berawal
            dari hal tersebut, seorang insan akan pada akhirnya mengetahui dan
            menemukan potensi yang mereka miliki.
          </p>
        </motion.div>
        <motion.div
          className="absolute z-20 flex h-full w-full items-center px-5 text-start font-medium opacity-0"
          style={{ opacity: opacityText4 }}
        >
          <p style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.7)" }}>
            Berbekal kedua hal tersebut–motivasi dan potensi–seorang insan dapat
            mulai menentukan jalan yang harus mereka tempuh untuk mencapai
            keinginan/impian mereka. Akan tetapi, dalam perjalanan tersebut
            terdapat berbagai hal dalam kehidupan manusia yang dapat menjadi
            pendukung maupun penghambat seseorang dalam mencapai impiannya.
            Dalam perjalanan hidup yang penuh dengan rintangan, tidak bisa
            dipungkiri bahwa dalam perjalanan seorang insan perlu alam semesta
            untuk mendukungnya juga, akan tetapi perlu diingat bahwa seorang
            insan tersebut tidak pernah sendirian karena alam semesta
            mendukungnya untuk tetap berdiri tegak dan melakukan perjalanannya
            sampai titik akhir tujuannya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
