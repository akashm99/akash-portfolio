const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "string",
    },
    {
      name: "githubUrl",
      title: "Github URL",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "front",
      title: "Front Page(y/n)",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of : [{type: "block"}]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    }
  ]
}

export default project;
