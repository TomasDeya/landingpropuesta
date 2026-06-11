import Navbar            from "@/components/layout/Navbar";
import Footer            from "@/components/layout/Footer";
import Hero              from "@/components/sections/Hero";
import Problema          from "@/components/sections/Problema";
import Soluciones        from "@/components/sections/Soluciones";
import SolucionesDetalle from "@/components/sections/SolucionesDetalle";
import Proceso           from "@/components/sections/Proceso";
import Clientes          from "@/components/sections/Clientes";
import CtaFinal          from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Soluciones />
        <SolucionesDetalle />
        <Proceso />
        <Clientes />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
