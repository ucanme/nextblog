/** @type {import('next').NextConfig} */
const nextConfig= {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build",
    experimental: {
        esbuildExternals: ['@code - hike/mdx/dist/components.cjs.js']
    }

}

module.exports = nextConfig