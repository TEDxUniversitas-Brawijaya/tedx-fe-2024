import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "never",
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "never",
    },
    {
      url: `${baseUrl}/events/waktu-wicara`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "never",
    },
    {
      url: `${baseUrl}/events/swara-aksara`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "never",
    },
    {
      url: `${baseUrl}/events/api-kehadiran`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "never",
    },
    {
      url: `${baseUrl}/events/merengkuh-karsa`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "never",
    },
  ];
}
