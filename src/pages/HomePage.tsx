import { About } from "../components/home/About";
import { Categories } from "../components/home/Categories";
import { Featured } from "../components/home/Featured";
import { Hero } from "../components/home/Hero";
import { HomeGallery } from "../components/home/HomeGallery";
import { HowToOrder } from "../components/home/HowToOrder";
import { InstagramBlock } from "../components/home/Instagram";
import { Locations } from "../components/home/Locations";
import { MadeForYou } from "../components/home/MadeForYou";
import { usePageTitle } from "../lib/usePageTitle";

export function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <MadeForYou />
      <About />
      <HomeGallery />
      <HowToOrder />
      <Locations />
      <InstagramBlock />
    </>
  );
}
