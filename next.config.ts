/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  // Ignorer sanity-nj lors du linting
  eslint: {
    ignoreDuringBuilds: true, // Désactive ESLint pendant le build (option temporaire)
    dirs: ["app", "components"], // Limite le linting à ces dossiers
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TypeScript pendant le build (option temporaire)
  },
};

export default nextConfig;