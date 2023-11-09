import { defineConfig } from "tinacms";
import { defaultFields } from "./templates";
import { contact_informationFields } from "./templates";
import { landing_pageFields } from "./templates";
import { personFields } from "./templates";
import { postFields } from "./templates";
import { coursesFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Noticias",
        name: "posts",
        path: "_posts",
        match: {
          include: "*",
        },
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              var date = new Date(values?.date);

              return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${values?.title
                ?.toLowerCase()
                .replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          ...postFields(),
        ],
      },
      {
        format: "yml",
        label: "Preguntas Frecuentes",
        name: "frequently_asked_questions",
        path: "_data",
        match: {
          include: "faq",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            name: "questions",
            label: "Preguntas Frecuentes",
            type: "object",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.question} `}
              }
            },
            list: true,
            fields: [
              {
                label: "Pregunta",
                name: "question",
                type: "string"
              },
              {
                label: "Respuesta",
                name: "answer",
                type: "string",
                ui: {
                  component: "textarea",
                },
              }
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Talleres",
        name: "talleres",
        path: "_courses",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo del documento",
            description: "Descripción del curso.",
            isBody: true,
          },
          ...coursesFields(),
        ],
      },
      {
        format: "yml",
        label: "Información de Contacto",
        name: "contact_information",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "information",
        },
        fields: [
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
          {
            type: "string",
            name: "instagram",
            label: "Instagram",
          },
          {
            type: "string",
            name: "youtube",
            label: "Youtube",
          },
        ],
      },
    ],
  },
});
