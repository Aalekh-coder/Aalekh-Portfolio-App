import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experiance from "@/components/Experiance";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex  justify-center items-center flex-col overflow-clip  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        <RecentProjects />
        <Client />
        <Experiance />
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
