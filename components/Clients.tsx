// landing-page-v2/components/Clients.tsx
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { getCompanies, getTestimonials } from "@/sanity/queries";
import { Company, Testimonial } from "@/sanity/types";
import Image from "next/image";

// Typage pour InfiniteMovingCards (à ajuster selon l'implémentation réelle)
interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction: "left" | "right";
  speed: "fast" | "normal" | "slow";
}

const Clients = async () => {
  const companies: Company[] = await getCompanies();
  const testimonials: Testimonial[] = await getTestimonials();

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Témoignages de {""}
        <span className="text-purple">clients satisfaits</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.length > 0 ? (
              companies.map(({ _id, id, img, name }) => (
                <div key={_id} className="flex md:max-w-60 max-w-32 gap-2">
                  {img?.asset?.url && (
                    <Image
                      src={img.asset.url}
                      alt={`Logo de ${name}, partenaire de Mitra Sol pour la pose de carrelage et parquet à Paris, Versailles, Boulogne-Billancourt, Saint-Denis, Créteil, Argenteuil, Montreuil, Évry-Courcouronnes, Chelles, Nanterre en Île-de-France`}
                      width={40}
                      height={40}
                      className="md:w-10 w-5 drop-shadow-lg"
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-700">Aucune entreprise à afficher.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;