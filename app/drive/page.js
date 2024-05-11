import Nav from "@/components/Nav";
import DriveSection from "@/sections/Drive";
import Footer from '@/sections/Footer';

export default function Drive() {
  return (
    <main className='h-screen flex flex-col'>

      <Nav className='h-1/5'/>
      <section className="flex-grow pt-16">
        <DriveSection />
      </section>
      <section className="h-1/5 inset-0 bottom-0">
        <Footer />
  </section>

    </main>
  )
}
