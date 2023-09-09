import Footer from "@components/Footer";
import Hero1 from "@components/Hero1";
import Hero2 from "@components/Hero2";
import Hero3 from "@components/Hero3";
import Nav from "@components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="pt-[138px]">
        <Hero1 />
      </div>

      <Hero2 />
      <Hero3 />
      <Footer />
    </>
  );
}
