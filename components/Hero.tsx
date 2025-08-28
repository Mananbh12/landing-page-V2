import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Image from "next/image";

const Hero = () => {
    const logo = "/logo.png";

  return (
    <div className="relative overflow-hidden pb-16 sm:pb-20 pt-28 sm:pt-36 bg-[#FAF3E0] min-h-[80vh] lg:min-h-screen">
        {/* Effets lumineux */}
        <div className="pointer-events-none absolute inset-0">
            <Spotlight className="hidden sm:block -top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] md:h-screen opacity-70 lg:opacity-90" fill="#FFC107" /> 
            <Spotlight className="hidden md:block -top-10 left-[70%] h-[60vh] w-[50vw] opacity-60 lg:left-full lg:h-[80vh] lg:opacity-80" fill="#66BB6A" /> 
            <Spotlight className="hidden lg:block -top-28 left-80 h-[70vh] w-[50vw] opacity-65 lg:h-[80vh] lg:opacity-85" fill="#66BB6A" />  
        </div>

        {/* Contenu principal */}
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 my-14 sm:my-20">
                <Image
                    src={logo}
                    alt="Logo de Mitra Sol, entreprise de pose de carrelage et parquet à Paris, Versailles, Boulogne-Billancourt, Saint-Denis, Créteil, Argenteuil, Montreuil, Évry-Courcouronnes, Chelles, Nanterre en Île-de-France"
                    width={300}
                    height={100}
                    className="h-auto w-[180px] xs:w-[220px] sm:w-[260px] md:w-[300px] drop-shadow-lg"
                />

                <TextGenerateEffect 
                    className="text-gray-700 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-6xl drop-shadow-lg"
                    words={"25 ans d'expertise au service de vos projets"} 
                />

                <p className="text-gray-700 md:tracking-wider mb-2 sm:mb-4 text-sm sm:text-base md:text-lg lg:text-2xl drop-shadow-lg max-w-prose">
                    Experts en revêtements de sols de père en fils
                </p>

                <a href="#projects" className="mt-2 sm:mt-4">
                    <MagicButton
                        title="Voir nos projets"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero