import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
