"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ExercicesPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[{ name: "Accueil", id: "/" }, { name: "Programmes", id: "/programmes" }, { name: "Exercices", id: "/exercices" }, { name: "Nutrition", id: "/nutrition" }, { name: "Contact", id: "/contact" }]}
          brandName="FitQuest"
        />
        <ProductCardOne
          animationType="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={false}
          title="Base de Données Exercices"
          description="Techniques détaillées pour maîtriser chaque mouvement."
          products={[
            { id: "1", name: "Squat", price: "Fondamental", imageSrc: "" },
            { id: "2", name: "Pompes", price: "Haut du corps", imageSrc: "" },
            { id: "3", name: "Tractions", price: "Dos", imageSrc: "" }
          ]}
        />
        <FooterSimple columns={[{ title: "FitQuest", items: [{ label: "Accueil", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}