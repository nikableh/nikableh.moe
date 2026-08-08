import { site } from "../../shared/site";

export default defineEventHandler((event) => {
    setResponseHeader(event, "content-type", "application/manifest+json");

    return {
        name: site.name,
        short_name: site.name,
        description: site.description,
        icons: [
            { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
        theme_color: site.themeColor,
        background_color: site.themeColor,
        display: "standalone",
    };
});
