import type { Config } from "@react-router/dev/config";

export default {
  // Using SPA mode
  ssr: false,
  async prerender() {
    return ["/", "/about"];
  }, // Pre-render the home page as static HTML
} satisfies Config;
