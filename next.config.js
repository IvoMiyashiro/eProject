/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MERCADO_PAGO_PUBLIC_KEY: process.env.MERCADO_PAGO_PUBLIC_KEY
  },
  images: {
    domains: ['c1.neweggimages.com', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  }
};

module.exports = nextConfig;
