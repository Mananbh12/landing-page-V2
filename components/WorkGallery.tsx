"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/utils/cn";
import ImagePlaceholder from "./ImagePlaceholder";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  description: string;
  category: "carrelage" | "parquet" | "pvc" | "renovation";
  isPlaceholder?: boolean;
}

// Données d'exemple avec placeholders temporaires
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "/gallery-carrelage-1.jpg",
    alt: "Installation carrelage moderne dans salle de bain",
    title: "Salle de bain contemporaine",
    description: "Fourniture et pose de faïence dans une salle de bain",
    category: "carrelage",
    isPlaceholder: false
  },
  {
    id: "2",
    url: "/cuisine-faience.jpg",
    alt: "Fourniture et pose de faience dans une cuisine",
    title: "Cuisine",
    description: "Fourniture et pose de faïence dans une cuisine",
    category: "carrelage",
    isPlaceholder: false
  },
  {
    id: "3",
    url: "/hall-romainville.jpg",
    alt: "Fourniture et pose de carrelage dans un hall d'entrée",
    title: "Pose de carreaux grands format dans un hall d'entrée",
    description: "Chantier Romainville avec Paris Ouest Construction",
    category: "carrelage",
    isPlaceholder: false
  },
  {
    id: "4",
    url: "/gallery-renovation-1.jpg",
    alt: "Carrelage chez un particulier",
    title: "Pose de carrelage chez un particulier",
    description: "Pose de carrelage grand format par dessus du carrelage existant chez un particulier",
    category: "renovation",
    isPlaceholder: false
  },
  {
    id: "5",
    url: "/gallery-carrelage-2.jpg",
    alt: "Carrelage anti-dérapant posé dans un local OM",
    title: "Pose de carrelage technique dans un local OM ",
    description: "Fourniture et pose de carrelage anti-dérapant dans un local OM",
    category: "carrelage",
    isPlaceholder: false
  },
  /*{
    id: "6",
    url: "/gallery-parquet-2.jpg",
    alt: "Parquet contrecollé dans chambre",
    title: "Chambre principale",
    description: "Pose de parquet contrecollé avec finition vitrifiée",
    category: "parquet",
    isPlaceholder: true
  },
  
  {
    id: "7",
    url: "/gallery-pvc-2.jpg",
    alt: "Sol PVC dans bureau",
    title: "Espace de travail",
    description: "Sol PVC antidérapant pour bureau professionnel",
    category: "pvc",
    isPlaceholder: true
  },
  {
    id: "8",
    url: "/gallery-renovation-2.jpg",
    alt: "Rénovation carrelage salle d'eau",
    title: "Salle d'eau rénovée",
    description: "Remplacement complet du carrelage avec nouvelle douche",
    category: "renovation",
    isPlaceholder: true
  }*/
];

const categories = [
  { id: "all", label: "Tous", count: galleryImages.length },
  { id: "carrelage", label: "Carrelage", count: galleryImages.filter(img => img.category === "carrelage").length },
  { id: "parquet", label: "Parquet", count: galleryImages.filter(img => img.category === "parquet").length },
  { id: "pvc", label: "PVC", count: galleryImages.filter(img => img.category === "pvc").length },
  { id: "renovation", label: "Rénovation", count: galleryImages.filter(img => img.category === "renovation").length }
];

const WorkGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxIndex(galleryImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[lightboxIndex]);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[lightboxIndex]);
  };

  const renderImage = (image: GalleryImage, className: string = "", fill: boolean = false) => {
    if (image.isPlaceholder) {
      if (fill) {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <ImagePlaceholder 
              width={400} 
              height={300} 
              text={image.category.toUpperCase()}
              className="w-full h-full"
            />
          </div>
        );
      }
      return (
        <ImagePlaceholder 
          width={400} 
          height={300} 
          text={image.category.toUpperCase()}
          className={className}
        />
      );
    }
    
    if (fill) {
      return (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover"
        />
      );
    }
    
    return (
      <Image
        src={image.url}
        alt={image.alt}
        width={800}
        height={600}
        className="max-w-full max-h-[80vh] object-contain rounded-lg"
      />
    );
  };

  return (
    <section className="py-20 bg-gray-900/30" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading">
            Galerie de <span className="text-purple">nos réalisations</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            Explorez notre portfolio de projets réalisés avec passion et expertise. 
            Chaque image témoigne de la qualité de notre travail et de notre 
            engagement envers l'excellence.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 border",
                selectedCategory === category.id
                  ? "bg-purple text-white border-purple shadow-lg"
                  : "bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500"
              )}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                {renderImage(image, "", true)}
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Informations */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-lg mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {image.description}
                </p>
                <div className="mt-3">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    {
                      "bg-blue-500/20 text-blue-300 border border-blue-500/30": image.category === "carrelage",
                      "bg-amber-500/20 text-amber-300 border border-amber-500/30": image.category === "parquet",
                      "bg-green-500/20 text-green-300 border border-green-500/30": image.category === "pvc",
                      "bg-purple-500/20 text-purple-300 border border-purple-500/30": image.category === "renovation"
                    }
                  )}>
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune image dans la catégorie */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Des images seront bientôt disponibles.
            </p>
          </div>
        )}

        {/* Message d'information */}
        
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image principale */}
            <div className="relative">
              {renderImage(selectedImage)}
              
              {/* Informations de l'image */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setLightboxIndex(index);
                    setSelectedImage(galleryImages[index]);
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === lightboxIndex
                      ? "bg-purple w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
