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
  try {
    const gridItems: GridItem[] = await getGridItems();

    // Vérification et déduplication des éléments
    const uniqueGridItems = gridItems.filter((item, index, self) => 
      index === self.findIndex(t => t._id === item._id)
    );

    
    // Log pour debug (à retirer en production)
    console.log("Grid Items uniques:", uniqueGridItems);

    return (
      <section id="about" className="relative z-20">
        <BentoGrid>
          {uniqueGridItems.map(({ _id, description, className, img }, index) => (
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
  } catch (error) {
    console.error("Erreur lors du chargement de la grille:", error);
    
  }
};

export default Grid;