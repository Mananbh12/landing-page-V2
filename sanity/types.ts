// landing-page-v2/sanity/types.ts
export interface GridItem {
    _id: string; // ID unique du document Sanity
    description: string;
    className: string;
    img?: {
      asset?: {
        url: string;
      };
    };
  }
  
  export interface Project {
    _id: string; // ID unique du document Sanity
    id: number; // Champ personnalisé pour l'ordre ou l'identification
    title: string;
    des: string;
    link: string;
    img?: {
      asset?: {
        url: string;
      };
    };
    iconLists: Array<{
      asset?: {
        url: string;
      };
    }>;
  }

  export interface Company {
    _id: string; // ID unique du document Sanity
    id: number; // Champ personnalisé pour l'ordre ou l'identification
    name: string; // Nom de l'entreprise
    img?: {
      asset?: {
        url: string;
      };
    }; // Image de l'entreprise
  }

  export interface Testimonial {
    _id: string;
    id?: number; // Si utilisé dans Sanity
    quote: string;
    name: string;
    title: string;
    img?: {
      asset?: {
        url: string;
      };
    };
  }
