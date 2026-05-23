"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Zap } from "lucide-react";

export default function ProgrammesPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[{ name: "Accueil", id: "/" }, { name: "Programmes", id: "/programmes" }, { name: "Exercices", id: "/exercices" }, { name: "Nutrition", id: "/nutrition" }, { name: "Contact", id: "/contact" }]}
          brandName="FitQuest"
        />
        <FeatureCardTwentySix
          textboxLayout="default"
          useInvertedBackground={false}
          title="Nos Programmes"
          description="Des parcours adaptés pour tous les niveaux, conçus pour te faire progresser en toute sécurité."
          features={[
            { title: "Base Musculation", description: "Apprends les mouvements essentiels.", buttonIcon: Zap },
            { title: "Full Body Débutant", description: "Entraînement complet du corps.", buttonIcon: Zap },
            { title: "Circuit Cardio", description: "Améliore ton souffle.", buttonIcon: Zap },
            { title: "Programme Volume", description: "Prends du muscle intelligemment.", buttonIcon: Zap }
          ]}
        />
        <FooterSimple columns={[{ title: "FitQuest", items: [{ label: "Accueil", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}