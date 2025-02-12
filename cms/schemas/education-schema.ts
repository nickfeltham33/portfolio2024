const education = {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "education",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "brief",
      title: "Brief",
      type: "string",
    },
    {
      name: "modulesListTitle",
      title: "Modules List Title",
      type: "string",
    },
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "item",
              title: "Item",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "skillsListTitle",
      title: "Skills List Title",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "item",
              title: "Item",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "string",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "string",
    },
  ],
};

export default education;
