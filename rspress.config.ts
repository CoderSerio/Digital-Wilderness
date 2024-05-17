import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  base: ".",
  builderConfig: {
    output: {
      assetPrefix: "https://digital-wilderness.xyz/",
    },
  },
  root: path.join(__dirname, "docs"),
  title: "数字荒原",
  description: "流浪数据的中转站",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});
