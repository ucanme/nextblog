/** @type {import('next').NextConfig} */
const nextConfig= {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build",
    serverExternalPackages: ['@code-hike/mdx']
}

module.exports = nextConfig