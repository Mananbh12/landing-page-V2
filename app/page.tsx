import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import WorkGallery from "@/components/WorkGallery";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {

  return (
    <main>
      <div>
        <Hero />
        <BeforeAfterCarousel />
        <WorkGallery />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
