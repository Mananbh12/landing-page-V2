import { cn } from "../../utils/cn";
import Image from "next/image";

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
  img?: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col md:flex-row items-center gap-2 max-h-[700px] overflow-hidden" // Réduit padding et ajoute overflow-hidden
      )}
    >
      <div className="flex-1 relative h-full">
        {img && (
          <Image
            src={img}
            alt="Image"
            width={300}
            height={100} // Réduit de 50 % par rapport à 200px
            className="object-cover w-full h-full rounded-xl"
          />
        )}
      </div>
      <div
        className={cn(
          "flex-1 h-full flex items-center font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300",
          className
        )}
      >
        {typeof description === "string" ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};