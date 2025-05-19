// sanity/sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import gridItem from "./schemaTypes/gridItems";
import project from "./schemaTypes/projects";
import testimonial from "./schemaTypes/testimonials";
import company from "./schemaTypes/compagny";

export default defineConfig({
  name: "default",
  title: "NJ Content",
  projectId: "0qbsvhal",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [gridItem, project, testimonial, company],
  },
});