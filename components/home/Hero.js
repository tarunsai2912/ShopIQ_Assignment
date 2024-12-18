"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HERO_SLIDES } from '@/lib/constants';
import HeroSlide from './HeroSlide';
import HeroControls from './HeroControls';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <HeroSlide
          key={index}
          slide={slide}
          isActive={currentSlide === index}
          priority={index === 0}
        />
      ))}
      <HeroControls
        totalSlides={HERO_SLIDES.length}
        currentSlide={currentSlide}
        onChange={setCurrentSlide}
      />
    </div>
  );
}