"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Accueil", id: "hero" },
        { name: "Programmes", id: "programs" },
        { name: "Nutrition", id: "nutrition" },
        { name: "Quiz", id: "quiz" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="FitQuest"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "plain" }}
      title="FitQuest : Ton Aventure Fitness Commence Ici"
      description="Progresse, apprends les bonnes bases et deviens la meilleure version de toi-même. Programmes adaptés pour débutants et ados."
      leftCarouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/group-social-media-team-working-modern-office_23-2147847490.jpg" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-discussing-office_23-2149345276.jpg" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-gym-sports-ladies-sportswear-friends-training_1157-43968.jpg" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-gym-sports-ladies-sportswear-friends-training_1157-43965.jpg" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/athlete-watching-running-track_23-2148222198.jpg" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/group-social-media-team-working-modern-office_23-2147847490.jpg" }
      ]}
      rightCarouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-woman-stretching-with-equipment_23-2149386016.jpg" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/blue-orange-plastic-chairs_250224-173.jpg" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/man-bouldering-spot_23-2151734344.jpg" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/cozy-loungers-health-spa-with-no-people-copy-space_637285-6704.jpg" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-sitting-grandstand_23-2149743819.jpg" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-sitting-grandstand_23-2149743819.jpg" }
      ]}
      buttons={[{ text: "Commencer maintenant", href: "#programs" }]}
    />
  </div>

  <div id="programs" data-section="programs">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Base Musculation", description: "Apprends les mouvements essentiels en toute sécurité.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/build-your-own-body-strength-fitness-exercise-get-fit_53876-21384.jpg" },
        { title: "Full Body Débutant", description: "Un entraînement complet pour tout ton corps.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/top-view-notepad-with-weights-sneakers_23-2148523243.jpg" },
        { title: "Circuit Cardio", description: "Boost ta condition physique avec nos circuits.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-vector/people-activities_23-2148003538.jpg" },
        { title: "Programme Volume", description: "Gagne en force et en volume avec méthode.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-vector/flat-people-doing-things-set_23-2147538834.jpg" },
      ]}
      title="Programmes pour Débutants"
      description="Choisis ton programme et construis des bases solides dès aujourd'hui."
    />
  </div>

  <div id="exercises" data-section="exercises">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Squat", price: "Fondamental", imageSrc: "http://img.b2bpic.net/free-photo/top-view-online-training-written-pink-sticky-note-notepad-black_140725-144541.jpg" },
        { id: "2", name: "Pompes", price: "Haut du corps", imageSrc: "http://img.b2bpic.net/free-photo/fitness-vlogger-recording-workout-video-camera-studio-using-dumbbells-explain-lifting-technique-sport-practice-muscular-woman-filming-online-training-lesson-toning-ball_482257-37363.jpg" },
        { id: "3", name: "Tractions", price: "Dos et bras", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-mat_23-2149177963.jpg" },
      ]}
      title="Exercices Expliqués Simplement"
      description="Apprends la bonne technique pour chaque mouvement."
    />
  </div>

  <div id="nutrition" data-section="nutrition">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Nutrition pour Progresser"
      description="Mange intelligemment pour soutenir tes efforts. Pas de régime miracle, juste de la discipline."
      bulletPoints={[
        { title: "Protéines", description: "Essentiel pour la construction musculaire." },
        { title: "Hydratation", description: "Bois de l'eau tout au long de la journée." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/group-fit-girls-with-vegetables_1303-24849.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="quiz" data-section="quiz">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", icon: Star, title: "Questions", value: "20+" },
        { id: "2", icon: Award, title: "Niveaux", value: "3" },
        { id: "3", icon: Zap, title: "Joueurs", value: "500+" },
      ]}
      title="FitQuest Quiz"
      description="Teste tes connaissances fitness et gagne des points."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Thomas", role: "Débutant", company: "FitQuest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-man-doing-workout-fitness-club_23-2147949517.jpg" },
        { id: "2", name: "Léa", role: "Débutante", company: "FitQuest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/sport-active-lifestyle-sporty-flexible-girl-fitness-woman-blue-sportswear-doing-stretching-exercise-light-background_639032-2567.jpg" },
        { id: "3", name: "Julien", role: "Intermédiaire", company: "FitQuest", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-woman-sitting-floor-relaxing_23-2148241614.jpg" },
      ]}
      kpiItems={[
        { value: "5k", label: "Athlètes" },
        { value: "10k", label: "Séances" },
        { value: "95%", label: "Satisfaits" },
      ]}
      title="Ce qu'ils pensent de FitQuest"
      description="Rejoins la communauté de ceux qui progressent."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "C'est pour quel âge ?", content: "FitQuest est idéal pour les ados et les débutants." },
        { id: "2", title: "Faut-il du matériel ?", content: "Pas obligatoirement, nos programmes incluent du poids de corps." },
      ]}
      sideTitle="Questions Fréquentes"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Prêt à transformer ton quotidien ?"
      buttons={[{ text: "Nous contacter", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "FitQuest", items: [{ label: "Accueil", href: "#hero" }, { label: "Programmes", href: "#programs" }] },
        { title: "Ressources", items: [{ label: "Nutrition", href: "#nutrition" }, { label: "Exercices", href: "#exercises" }] },
      ]}
      bottomLeftText="© 2024 FitQuest. Tous droits réservés."
      bottomRightText="Paiement sécurisé via Stripe"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}