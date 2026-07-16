import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Classes from "../components/Classes";
import Fees from "../components/Fees";
import Admission from "../components/Admission";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {

  return (

    <main>

      {/* HOME */}
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CLASSES */}
      <section id="classes">
        <Classes />
      </section>

      {/* FEES */}
      <section id="fees">
        <Fees />
      </section>


      {/* ADMISSION */}
      <section id="admission">
        <Admission />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />


    </main>

  );

}