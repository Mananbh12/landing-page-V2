export default {
    name: "company",
    title: "Company",
    type: "document",
    fields: [
      { name: "id", title: "ID", type: "number" },
      { name: "name", title: "Name", type: "string" },
      { name: "img", title: "Image", type: "image", options: { hotspot: true } },
    ],
  };