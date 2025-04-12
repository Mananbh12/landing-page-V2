import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
  return (
    <section id="about" className="relative z-20">
      <BentoGrid>
        {gridItems.map(({ img, description, className }, index) => (
          <BentoGridItem
            key={index} // Ajout de la prop key
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