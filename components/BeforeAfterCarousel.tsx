"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Move } from "lucide-react";
import { cn } from "@/utils/cn";
import ImagePlaceholder from "./ImagePlaceholder";

interface BeforeAfterImage {
  id: string;
  before: {
    url: string;
    alt: string;
    description: string;
    isPlaceholder?: boolean;
  };
  after: {
    url: string;
    alt: string;
    description: string;
    isPlaceholder?: boolean;
  };
  projectTitle: string;
  location: string;
  surface: string;
}

// Données d'exemple avec placeholders temporaires
const beforeAfterData: BeforeAfterImage[] = [
  {
    id: "1",
    before: {
      url: "/placeholder-before-1.jpg",
      alt: "Sol avant rénovation - Carrelage usé et décoloré",
      description: "Sol en carrelage usé et décoloré nécessitant une rénovation complète",
      isPlaceholder: true
    },
    after: {
      url: "/placeholder-after-1.jpg",
      alt: "Sol après rénovation - Nouveau carrelage moderne",
      description: "Nouveau carrelage moderne et élégant installé avec soin",
      isPlaceholder: true
    },
    projectTitle: "Rénovation Appartement Haussmannien",
    location: "Paris 8ème",
    surface: "45m²"
  },
  {
    id: "2",
    before: {
      url: "/placeholder-before-2.jpg",
      alt: "Parquet abîmé et taché",
      description: "Parquet ancien abîmé avec nombreuses taches et rayures",
      isPlaceholder: true
    },
    after: {
      url: "/placeholder-after-2.jpg",
      alt: "Parquet rénové et vitrifié",
      description: "Parquet rénové, poncé et vitrifié pour un rendu impeccable",
      isPlaceholder: true
    },
    projectTitle: "Rénovation Parquet Appartement",
    location: "Versailles",
    surface: "32m²"
  },
  {
    id: "3",
    before: {
      url: "/placeholder-before-3.jpg",
      alt: "Sol PVC déchiré et usé",
      description: "Sol PVC ancien déchiré et usé par le temps",
      isPlaceholder: true
    },
    after: {
      url: "/placeholder-after-3.jpg",
      alt: "Nouveau sol PVC moderne",
      description: "Nouveau sol PVC moderne et résistant installé",
      isPlaceholder: true
    },
    projectTitle: "Remplacement Sol PVC Bureau",
    location: "Boulogne-Billancourt",
    surface: "120m²"
  }
];

const BeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(50);
  const [isBeforeVisible, setIsBeforeVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setDragPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setDragPosition(50);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const rect = carouselRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setDragPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const rect = carouselRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.touches[0].clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setDragPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const currentProject = beforeAfterData[currentIndex];

  const renderImage = (image: any, className: string = "") => {
    if (image.isPlaceholder) {
      return (
        <ImagePlaceholder 
          width={800} 
          height={500} 
          text={image.alt.includes("avant") ? "AVANT" : "APRÈS"}
          className={className}
        />
      );
    }
    
    return (
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className={`object-cover ${className}`}
      />
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/20" id="before-after">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading">
            Transformations <span className="text-purple">Avant/Après</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            Découvrez la qualité de nos réalisations à travers ces transformations 
            spectaculaires de sols. De la rénovation à la création, chaque projet 
            témoigne de notre expertise et de notre savoir-faire.
          </p>
        </div>

        {/* Carrousel principal */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-purple/20 hover:bg-purple/30 transition-colors border border-purple/30"
            >
              <ChevronLeft className="w-6 h-6 text-purple" />
            </button>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {currentProject.projectTitle}
              </h3>
              <p className="text-gray-400">
                {currentProject.location} • {currentProject.surface}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-purple/20 hover:bg-purple/30 transition-colors border border-purple/30"
            >
              <ChevronRight className="w-6 h-6 text-purple" />
            </button>
          </div>

          {/* Comparaison Avant/Après */}
          <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div
              ref={carouselRef}
              className="relative h-[500px] cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Image "Après" (arrière-plan) */}
              <div className="absolute inset-0">
                {renderImage(currentProject.after)}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Image "Avant" (superposée avec masque) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
              >
                {renderImage(currentProject.before)}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Séparateur vertical */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-purple shadow-lg"
                style={{ left: `${dragPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center shadow-lg">
                    <Move className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Labels Avant/Après */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                AVANT
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                APRÈS
              </div>

              {/* Descriptions */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/70 text-white p-3 rounded-lg">
                    <p className="text-sm">{currentProject.before.description}</p>
                  </div>
                  <div className="bg-black/70 text-white p-3 rounded-lg">
                    <p className="text-sm">{currentProject.after.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setDragPosition(50);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-purple w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                )}
              />
            ))}
          </div>
        </div>

        {/* Instructions d'utilisation */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            💡 Glissez le séparateur vertical pour comparer les transformations avant/après
          </p>
        </div>

        {/* Message d'information */}
        <div className="text-center mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 text-sm">
            ℹ️ Les images affichées sont des placeholders. Remplacez-les par vos vraies photos 
            de projets avant/après en suivant le guide IMAGES_SETUP.md
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
