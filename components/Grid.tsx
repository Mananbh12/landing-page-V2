// landing-page-v2/components/Grid.tsx
import { getGridItems } from "@/sanity/queries";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GridItem } from "@/sanity/types";

// Typage des props pour BentoGridItem (à ajuster selon l'implémentation réelle)
interface BentoGridItemProps {
  img?: string | null;
  description: string;
  className: string;
}

const Grid = async () => {
  const gridItems: GridItem[] = await getGridItems();

  return (
    <section id="about" className="relative z-20">
      <BentoGrid>
        {gridItems.map(({ _id, description, className, img }) => (
          <BentoGridItem
            key={_id} // Utilisation de _id pour une clé unique
            img={img?.asset?.url || undefined} // URL ou null si pas d'image
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;