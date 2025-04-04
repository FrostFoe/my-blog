export const SITE = {
  website: "https://frostfoe.netlify.app/",
  author: "FrostFoe",
  profile: "https://frostfoe.netlify.app/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "FrostFoe",
  ogImage: "logo.ico",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/FrostFoe/my-blog/edit/main/",
  },
  dynamicOgImage: false,
} as const;
