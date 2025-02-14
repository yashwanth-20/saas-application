import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_kB9iQ4jNLwAH@ep-wispy-river-a8k6xbq5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
  }
});
