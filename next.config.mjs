/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Tells Next.js to build a static site (required for Tauri)
    images: {
        unoptimized: true, // Tauri cannot use Next.js's image optimization server
    },
};

export default nextConfig;