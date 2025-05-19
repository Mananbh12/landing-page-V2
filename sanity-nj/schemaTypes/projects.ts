export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      { name: "id", title: "ID", type: "number" },
      { name: "title", title: "Title", type: "string" },
      { name: "des", title: "Description", type: "text" },
      { name: "img", title: "Image", type: "image", options: { hotspot: true } },
      { name: "iconLists", title: "Icon Lists", type: "array", of: [{ type: "image" }] },
      { name: "link", title: "Link", type: "string" },
    ],
  };