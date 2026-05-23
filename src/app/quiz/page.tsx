"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { useState } from 'react';

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const questions = [
    { q: "Quel est ton objectif principal ?", options: ["Musculation", "Cardio", "Perte de poids"] },
    { q: "Quelle est ta fréquence d'entraînement ?", options: ["1-2 fois/semaine", "3-4 fois/semaine", "5+ fois/semaine"] },
  ];

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
        <main className="min-h-screen py-20 flex flex-col items-center justify-center container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Quiz Fitness</h1>
          <div className="bg-card p-8 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl mb-6">{questions[currentStep].q}</h2>
            <div className="grid gap-4">
              {questions[currentStep].options.map((opt) => (
                <button 
                  key={opt}
                  className="p-4 border rounded hover:bg-accent"
                  onClick={() => setCurrentStep(prev => Math.min(prev + 1, questions.length - 1))}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
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