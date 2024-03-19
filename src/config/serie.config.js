const config = {
  "lang": "es",
  "base": "https://JuanDVillarraga.github.io",
  "baseurl": "/ProductosCulturales",
  "title": "Productos Culturales del habitar doméstico ",
  "subtitle": "Colección de referencias culturales ",
  "credits": "Por: Juan Darío Villarraga",
  "copyright": "By JDVP",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autor",
      "fecha"
    ]
  }
};
export default config;