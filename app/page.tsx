import Navbar       from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Problem       from "@/components/Problem";
import ArchitectureLayers from "@/components/ArchitectureLayers";
import Architecture  from "@/components/Architecture";
import Solution      from "@/components/Solution";
import Dashboard     from "@/components/Dashboard";
import TechStack     from "@/components/TechStack";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />          {/* Section 1 */}
      <Problem />       {/* Section 2 */}
      <ArchitectureLayers /> {/* Section 3 */}
      <Architecture />  {/* Section 4 */}
      <Solution />      {/* Section 5 */}
      <Dashboard />     {/* Section 6 */}
      <TechStack />     {/* Section 7 */}
      <Footer />        {/* Section 8 */}
    </main>
  );
}
