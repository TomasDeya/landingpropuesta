import Navbar            from "@/components/layout/Navbar";
import Footer            from "@/components/layout/Footer";
import Hero              from "@/components/sections/Hero";
import Problema          from "@/components/sections/Problema";
import Soluciones        from "@/components/sections/Soluciones";
import LiveCounter       from "@/components/sections/LiveCounter";
import Proceso           from "@/components/sections/Proceso";
import CtaFinal          from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Soluciones />
        <LiveCounter />
        <Proceso />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
