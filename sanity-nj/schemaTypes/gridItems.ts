export default {
    name: "gridItem",
    title: "Grid Item",
    type: "document",
    fields: [
      { name: "img", title: "Image", type: "image", options: { hotspot: true } },
      { name: "description", title: "Description", type: "text" },
      { name: "className", title: "Class Name", type: "string" },
    ],
  };