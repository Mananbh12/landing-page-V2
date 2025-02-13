import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  img,
  description,
}: {
  className?: string;
  img?: string; // Utiliser un string (URL de l'image) au lieu d'un JSX element
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-row space-x-4 items-center",
        className
      )}
    >
      <div className="flex-1 relative">
        {/* Utiliser l'URL pour afficher l'image */}
        {img && (
          <img
            src={img}
            alt="Image"
            className="object-cover w-full h-full rounded-xl"
          />
        )}
      </div>
      <div className="w-1/2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};
