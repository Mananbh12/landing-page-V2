import { getGridItems } from "@/sanity/queries";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GridItem } from "@/sanity/types";

// Typage des props pour BentoGridItem
interface BentoGridItemProps {
  img?: string | null;
  description: string;
  className?: string; // Rendu optionnel pour éviter des erreurs si undefined
}

const Grid = async () => {
  const gridItems: GridItem[] = await getGridItems();

  // Ajout d'un log pour vérifier les données (facultatif, à retirer après test)
  console.log("Grid Items:", gridItems);

  return (
    <section id="about" className="relative z-20">
      <BentoGrid>
        {gridItems.map(({ _id, description, className, img }, index) => (
          <BentoGridItem
            key={`${_id}-${index}`} // Clé robuste avec _id et index
            img={img?.asset?.url || undefined} // URL ou undefined si pas d'image
            description={description || ""} // Valeur par défaut si description est undefined
            className={className || ""} // Valeur par défaut si className est undefined
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;