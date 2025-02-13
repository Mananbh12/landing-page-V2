import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGridItems'; // Nouveau composant client

const Grid = () => {
  return (
    <section id="about" className="relative z-20">
      <BentoGrid>
        {gridItems.map(({img, description, className}) => (
          <BentoGridItem
            img={img}
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
