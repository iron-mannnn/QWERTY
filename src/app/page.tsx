import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

      </main>
    </>
  );
}
