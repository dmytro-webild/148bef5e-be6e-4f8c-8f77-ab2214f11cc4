"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { NavbarStyleApple } from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { FooterSimple } from '@/components/sections/footer/FooterSimple';

export default function ContactPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Contact", id: "/contact" }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterSimple columns={[]} bottomLeftText="© 2024" bottomRightText="All rights reserved." />
      </div>
    </ThemeProvider>
  );
}