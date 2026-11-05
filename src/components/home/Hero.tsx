import { Link } from "react-router-dom";
import { site } from "../../config/site";
import { CakeImage } from "../CakeImage";

const pill = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute left-0 top-28 hidden w-36 xl:block 2xl:w-44">
          <div className="aspect-[3/4] -rotate-6 overflow-hidden rounded-2xl shadow-soft">
            <CakeImage
              src="/images/engagement-cake.png"
              alt="White and gold engagement cake with red roses, made by Ssruthi."
              fallbackLabel="Engagement cake"
              eager
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-16 hidden w-32 xl:block 2xl:w-40">
          <div className="aspect-[4/5] rotate-3 overflow-hidden rounded-2xl shadow-soft">
            <CakeImage
              src="/images/fairy-birthday.png"
              alt="Pink fairy birthday cake, made by Ssruthi."
              fallbackLabel="Fairy cake"
              eager
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 max-w-sm xl:hidden">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <CakeImage
                src="/images/pink-white-birthday.png"
                alt="Pink and white birthday cake, made by Ssruthi."
                fallbackLabel="Birthday cake"
                eager
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <h1 className="font-display text-[2.7rem] leading-[1.05] text-chocolate sm:text-6xl lg:text-7xl">
            Homemade cakes.
            <span className="mt-1 block">Made to celebrate.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cocoa sm:text-lg">
            Every celebration is different. I make homemade cakes inspired by your ideas, your occasions
            and the little details that make them special.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cocoa sm:text-lg">
            I bake from home in {site.town}. {site.advanceNote}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/plan" className={`${pill} bg-chocolate text-ivory hover:bg-[#3a2d22]`}>
              Plan your cake
            </Link>
            <Link to="/gallery" className={`${pill} border border-stone bg-card text-chocolate hover:border-chocolate/40`}>
              See her cakes
            </Link>
          </div>
        </div>

        <div className="pointer-events-none relative z-10 mx-auto mt-14 hidden w-44 xl:block">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-soft">
            <CakeImage
              src="/images/chocolate-birthday.png"
              alt="Chocolate birthday cake, made by Ssruthi."
              fallbackLabel="Chocolate cake"
              eager
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
