// landing-page-v2/components/RecentProjects.tsx
import { getProjects } from "@/sanity/queries";
import { Project } from "@/sanity/types";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

// Typage des props pour PinContainer (à ajuster selon l'implémentation réelle)
interface PinContainerProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

const RecentProjects = async () => {
  const projects: Project[] = await getProjects();

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Un aperçu de {""}
        <span className="text-purple">quelques projets</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ _id, id, title, des, img, iconLists, link }) => (
          <div
            key={_id} // Utilisation de _id pour une clé unique
            className="sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]" />
                {img?.asset?.url && (
                  <Image
                    src={img.asset.url}
                    alt={`Projet de ${title} - Pose de carrelage ou parquet par Mitra Sol à Paris, Versailles, Boulogne-Billancourt, Saint-Denis, Créteil, Argenteuil, Montreuil, Évry-Courcouronnes, Chelles, Nanterre en Île-de-France`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="z-10 absolute bottom-0 drop-shadow-lg"
                  />
                )}
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 drop-shadow-lg">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 drop-shadow-lg">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) =>
                    icon?.asset?.url ? (
                      <div
                        key={`${_id}-icon-${index}`}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon.asset.url}
                          alt={`Icône ${index} du projet ${title} par Mitra Sol à Sartrouville, Massy, Aulnay-sous-Bois, Vitry-sur-Seine, Sarcelles en Île-de-France`}
                          width={40}
                          height={40}
                          style={{ padding: "8px" }}
                          className="drop-shadow-lg"
                        />
                      </div>
                    ) : null
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check live site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;