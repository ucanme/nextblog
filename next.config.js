/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build"
}

const nextConfig= {
    serverExternalPackages: ['@code-hike/mdx'],
    swcMinify: false,
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    distDir: "build"
}

module.exports = nextConfig
