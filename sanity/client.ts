// sanity/client.ts
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0qbsvhal", // Remplacez par l'ID de votre projet Sanity
  dataset: "production",
  apiVersion: "2023-05-03", // Version récente de l'API
  useCdn: true, // Active le CDN pour des performances optimales
  token: process.env.SANITY_READ_TOKEN, // Optionnel, pour les requêtes authentifiées
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}