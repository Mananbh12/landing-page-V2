import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    const logo = "/logo.png";

  return (
    <div className="pb-20 pt-36 bg-[#FAF3E0]">
        {/* Effets lumineux */}
        <div className="relative">
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-90" fill="#FFC107" /> 
            <Spotlight className="-top-10 left-full h-[80vh] w-[50vw] opacity-80" fill="#66BB6A" /> 
            <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw] opacity-85" fill="#66BB6A" />  
        </div>

        {/* Contenu principal */}
        <div className="relative flex justify-center my-20">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <img src={logo} alt="Logo" className="w-60 h-auto drop-shadow-lg" />
                
                <TextGenerateEffect 
                    className="text-center text-gray-700 text-3xl md:text-4xl lg:text-6xl drop-shadow-lg"
                    words={"25 ans d'expertise au service de vos projets"} 
                />
                
                <p className="text-center text-gray-700 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl drop-shadow-lg">
                    Experts en revêtements de sols de père en fils
                </p>

                <a href="#projects">
                    <MagicButton
                        title="Voir mes projets"
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
