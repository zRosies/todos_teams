/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    reactStrictMode: true,
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
