/** @type {import('next').NextConfig} */
const nextConfig= {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build",
    transpilePackages: ['@code-hike/mdx'],
    experimental: {
        optimizePackageImports: ['@code-hike/mdx'],
    },
}

module.exports = nextConfig