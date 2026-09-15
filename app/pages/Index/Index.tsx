import Banner from "./Banner/page";
import FeaturedShows from "./FeaturedShows/page";
import Hero from "./Hero/page";
import HostProfiles from "./HostProfiles/page";
import RecentEpisode from "./RecentEpisode/page";
import Testimonial from "./Testimonial/page";
import WhyChooseUs from "./WhyChooseUs/page";

export default function Index() {
  return (
    <>
      <Hero />
      <FeaturedShows />
      <WhyChooseUs />
      <RecentEpisode />
      <HostProfiles />
      <Testimonial />
      <Banner />
    </>
  );
}
