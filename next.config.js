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
    webpack: (config) => {
        config.externals.push('@code-hike/mdx');
        return config;
    },
}

module.exports = nextConfig