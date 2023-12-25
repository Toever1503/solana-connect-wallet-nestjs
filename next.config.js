/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./common/i18n/i18n.ts');

const nextConfig = {
}

// i18n extentions for vs code, https://next-intl-docs.vercel.app/docs/workflows/vscode-integration

module.exports = withNextIntl({
    ...nextConfig
})
