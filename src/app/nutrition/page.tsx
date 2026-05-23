"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import SplitAbout from '@/components/sections/about/SplitAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function NutritionPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[{ name: "Accueil", id: "/" }, { name: "Programmes", id: "/programmes" }, { name: "Exercices", id: "/exercices" }, { name: "Nutrition", id: "/nutrition" }, { name: "Contact", id: "/contact" }]}
          brandName="FitQuest"
        />
        <SplitAbout
          textboxLayout="split"
          useInvertedBackground={false}
          title="Guides Nutrition"
          description="Apprends à nourrir ton corps pour atteindre tes objectifs de performance."
          bulletPoints={[
            { title: "Protéines", description: "Le socle de ta croissance." },
            { title: "Hydratation", description: "L'alliée indispensable." },
            { title: "Équilibre", description: "Manger sainement sans privation." }
          ]}
        />
        <FooterSimple columns={[{ title: "FitQuest", items: [{ label: "Accueil", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}