import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2024-03-13",
  useCdn: false,
});
