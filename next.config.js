/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MERCADO_PAGO_PUBLIC_KEY: process.env.MERCADO_PAGO_PUBLIC_KEY,
    CLOUD_URL: process.env.CLOUD_URL,
    TESTING_USER_ID: process.env.TESTING_USER_ID,
  },
  images: {
    domains: ['res.cloudinary.com', 'c1.neweggimages.com', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
