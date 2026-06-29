import Navbar       from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Problem       from "@/components/Problem";
import Walkthrough   from "@/components/Walkthrough";
import StarFeature   from "@/components/StarFeature";
import SupportingAgents from "@/components/SupportingAgents";
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
      <Hero />               {/* Step 1 */}
      <Problem />            {/* Step 2: Trimmed Ramesh pension story */}
      <Walkthrough />        {/* Step 3: EngageBot 4-sec walkthrough */}
      <StarFeature />        {/* Step 4: AI Voice Call deep-dive */}
      <SupportingAgents />   {/* Step 5: Priya/Ankit stories & Intro to other agents */}
      <ArchitectureLayers /> {/* Step 6: 6 layers */}
      <Architecture />       {/* Step 7: The Full Picture (Reordered) */}
      <Solution />           {/* Step 8: Pillar Cards (Reordered) */}
      <Dashboard />          {/* Step 9: Dashboard (Reordered feed) */}
      <TechStack />          {/* Step 10: Tech Stack (Updated impact stats) */}
      <Footer />
    </main>
  );
}
