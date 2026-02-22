"use client";
import HeroSection from "@/components/home/HeroSection";
import { useState } from "react";
import Link from "next/link";

/** images set 1 */
const images = [
  "/hero/51cxCk59EYL._AC_SY200_.jpg",
  "/hero/51gZVgMCGAL._AC_SY200_.jpg",
  "/hero/51jvceY9uLL._AC_SY200_.jpg",
  "/hero/51njsMj5T+L._AC_SY200_.jpg",
  "/hero/51rrw-nJloL._AC_SY200_.jpg",
  "/hero/51uYx5bmBVL._AC_SY200_.jpg",
  "/hero/1WzfToqIVL._AC_SY200_.jpg",
  "/hero/61hQNKbgyUL._AC_SY200_.jpg",
  "/hero/61i8mQWg5BL._AC_SY200_.jpg",
  "/hero/61sGPNtRGHL._AC_SY200_.jpg",
  "/hero/61StK4wVlrL._AC_SY200_.jpg",
  "/hero/61T14qjzXVL._AC_SY200_.jpg",
  "/hero/61wM4Tnjm5L._AC_SY200_.jpg",
  "/hero/61yDSJXyb8L._AC_SY200_.jpg",
  "/hero/61Z-M7aDd2L._AC_SY200_.jpg",
  "/hero/615YjcbcLpL._AC_SY200_.jpg",
  "/hero/71Ak4hDgA2L._AC_SY200_.jpg",
  "/hero/71D-B-Hx0mL._AC_SY200_.jpg",
  "/hero/71GANB-s4AL._AC_SY200_.jpg",
  "/hero/71I6jjG2SfL._AC_SY200_.jpg",
  "/hero/71kh6vuepjL._AC_SY200_.jpg",
  "/hero/71mk282cGEL._AC_SY200_.jpg",
  "/hero/71oQPS-8moL._AC_SY200_.jpg",
  "/hero/710At-N4HqL._AC_SY200_.jpg",
];

/** img set 2 */
const images2 = [
  "/hero/51To0AGLX3L._AC_SY200_.jpg",
  "/hero/61ccYqIug8L._AC_SY200_.jpg",
  "/hero/61dbpQ2uTfL._AC_SY200_.jpg",
  "/hero/61GTB3mI4jL._AC_SY200_.jpg",
  "/hero/61jj1quMhvL._AC_SY200_.jpg",
  "/hero/61L5eajeL2L._AC_SY200_.jpg",
  "/hero/61OEgcO7uRL._AC_SY200_.jpg",
  "/hero/61SIiRYXxiL._AC_SY200_.jpg",
  "/hero/61UabmSXS3L._AC_SY200_.jpg",
  "/hero/81+QjwRRcvL._AC_SY200_.jpg",
  "/hero/81bqxGq6DlL._AC_SY200_.jpg",
  "/hero/81iileFrbxL._AC_SY200_.jpg",
  "/hero/81R5ZE54oHL._AC_SY200_.jpg",
  "/hero/81Y4QaZaR-L._AC_SY200_.jpg",
  "/hero/91dx-18Nr6L._AC_SY200_.jpg",
  "/hero/819RF051TpL._AC_SY200_.jpg",
  "/hero/A1vPbyFbElL._AC_SY200_.jpg",
  "/hero/Sofas._SY116_CB573440912_.jpg",
  "/hero/Office_chairs._SY116_CB573440912_.jpg",
];

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const slides = chunk(images, 8);
const slides2 = chunk(images2, 8);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  const nextSlide2 = () =>
    setCurrentSlide2((p) => (p === slides2.length - 1 ? 0 : p + 1));
  const prevSlide2 = () =>
    setCurrentSlide2((p) => (p === 0 ? slides2.length - 1 : p - 1));

  return (
    <>
      {/* Hero Banner */}
      <HeroSection />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* AI Ambient Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] bg-orange-400/20 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-amber-300/20 blur-3xl rounded-full" />

        {/* Trending Products */}
        <section>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
            Trending on Carrot.in
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                title: "Continue shopping deals",
                category: "mobile",
                images: [
                  "/hero/container1/610VHpcICiL._AC_SY145_.jpg",
                  "/hero/container1/71Pwqss09pL._AC_SY145_.jpg",
                  "/hero/container1/616kkUbRg4L._AC_SY145_.jpg",
                  "/hero/container1/712PQywSKpL._AC_SY145_.jpg",
                ],
                link: "See more deals",
              },
              {
                title: "Revamp your home in style",
                category: "home",
                images: [
                  "/hero/container2/51wfmtMEPgL._AC_SY200_.jpg",
                  "/hero/container2/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
                  "/hero/container2/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
                  "/hero/container2/186x116_Home_storage_1._SY116_CB555624324_.jpg",
                ],
                link: "Shop now",
              },
              { 
                title: "Best Sellers in Computers & Accessories", 
                category: "computer", 
                images: [
                  "/hero/61s6d6BxW4L._AC_SY170_.jpg", 
                  "/hero/81rRMwFG0+L._AC_SY170_.jpg", 
                  "/hero/41uSdnQa7nL._AC_SY170_.jpg", 
                  "/hero/51+TLzEE6QL._AC_SY170_.jpg",
                ], 
                link: "See all offers", 
              },
              { 
                title: "Best Sellers in Home & Kitchen", 
                category: "home", 
                images: [ 
                  "/hero/61fn1xtHO4L._AC_SY170_.jpg", 
                  "/hero/71775fRr+gL._AC_SY170_.jpg", 
                  "/hero/61Mx6KEz3QL._AC_SY170_.jpg", 
                  "/hero/71QfC+NELFL._AC_SY170_.jpg", 
                ], 
                link: "See more deals", 
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative min-w-[320px] h-[440px] flex-shrink-0 rounded-2xl p-5 bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)] hover:border-orange-200"
              >
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>

                <Link href={`/category/${card.category || "home"}`}>
                  <div className="grid grid-cols-2 gap-3">
                    {card.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-[133px] h-[152px] overflow-hidden"
                      >
                        <img
                          src={img}
                          className="w-full h-full object-contain"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </Link>

                <p className="text-blue-600 font-semibold text-sm mt-4">
                  {card.link}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Slider 1 ===== */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">
            Suitcase for traveling
          </h3>

          <div className="relative bg-white rounded-lg p-4 overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              ▶
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="min-w-full flex gap-6 justify-between items-center"
                  >
                    {slide.map((img, j) => (
                      <div key={j} className="flex-shrink-0">
                        <img
                          src={img}
                          alt=""
                          className="max-h-[190px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Slider 2 ===== */}
        <section>
          <h3 className="text-xl font-bold mb-4">
            Up to 60% Off | Smart furniture for every room
          </h3>

          <div className="relative bg-white rounded-lg p-4 overflow-hidden">
            <button
              onClick={prevSlide2}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              ◀
            </button>

            <button
              onClick={nextSlide2}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              ▶
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide2 * 100}%)` }}
              >
                {slides2.map((slide, i) => (
                  <div
                    key={i}
                    className="min-w-full flex gap-6 justify-between items-center"
                  >
                    {slide.map((img, j) => (
                      <div key={j} className="flex-shrink-0">
                        <img
                          src={img}
                          alt=""
                          className="max-h-[200px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}