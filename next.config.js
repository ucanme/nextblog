/** @type {import('next').NextConfig} */
const nextConfig= {
    swcMinify: false,
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build",
    transpilePackages: ['@code-hike/mdx'],
}

module.exports = nextConfig