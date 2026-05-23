"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function ContactPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple 
            navItems={[
                { name: "Accueil", id: "/" },
                { name: "Programmes", id: "/#programs" },
                { name: "Quiz", id: "/quiz" },
                { name: "Contact", id: "/contact" },
            ]} 
        />
        <main className="min-h-screen py-20">
          <ContactSplitForm 
            title="Contactez-nous"
            description="Une question ? Besoin d'un conseil ? Nous sommes là pour toi."
            inputs={[
                { name: "nom", type: "text", placeholder: "Ton nom" },
                { name: "email", type: "email", placeholder: "Ton email" }
            ]}
            useInvertedBackground={false}
          />
        </main>
        <FooterSimple 
             columns={[
                { title: "FitQuest", items: [{ label: "Accueil", href: "/" }] },
            ]} 
        />
      </ReactLenis>
    </ThemeProvider>
  );
}