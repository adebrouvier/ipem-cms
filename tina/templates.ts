import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function contact_informationFields() {
  return [
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "phone",
      label: "Phone",
    },
    {
      type: "string",
      name: "address_1",
      label: "Address 1",
    },
    {
      type: "string",
      name: "address_2",
      label: "Address 2",
    },
    {
      type: "string",
      name: "city",
      label: "City",
    },
    {
      type: "string",
      name: "state",
      label: "State",
    },
    {
      type: "string",
      name: "postal_code",
      label: "Postal code",
    },
    {
      type: "string",
      name: "country",
      label: "Country",
    },
    {
      type: "string",
      name: "twitter",
      label: "Twitter",
    },
    {
      type: "string",
      name: "facebook",
      label: "Facebook",
    },
  ] as TinaField[];
}
export function landing_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "heading",
      label: "Hero Heading",
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Hero Sub heading",
    },
    {
      type: "image",
      name: "banner_image",
      label: "Hero Image",
    },
    {
      type: "object",
      name: "hero_button",
      label: "Hero Button",
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
        },
        {
          type: "string",
          name: "href",
          label: "Link",
        },
      ],
    },
    {
      type: "string",
      name: "textline",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "services",
      label: "Services",
      list: true,
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Heading",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
      ],
    },
    {
      type: "boolean",
      name: "show_news",
      label: "Show News?",
    },
    {
      type: "image",
      name: "partners",
      label: "Partner Logos",
      list: true,
    },
    {
      type: "boolean",
      name: "show_staff",
      label: "Show Staff?",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
export function personFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "role",
      label: "Departments",
      list: true,
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "linkedin",
      label: "Linkedin",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
      ui: {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: "HH:mm"
      },
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "banner_image",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "related_posts",
      label: "Related Posts",
      list: true,
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
    },
  ] as TinaField[];
}

export function coursesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "banner_image",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
  ] as TinaField[];
}
