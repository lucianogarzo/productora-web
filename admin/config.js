window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "lucianogarzo/productora-web",
      branch: "main",
      auth_type: "pkce"
    },

    media_folder: "assets/uploads",
    public_folder: "/assets/uploads",

    collections: [
      {
        name: "projects",
        label: "Projects",
        folder: "content/projects",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Language", name: "lang", widget: "select", options: ["es", "en"] },
          { label: "Thumbnail", name: "thumbnail", widget: "image" },
          { label: "Video URL (Vimeo)", name: "video", widget: "string" },
          { label: "Description", name: "description", widget: "text" }
        ]
      }
    ]
  }
});
