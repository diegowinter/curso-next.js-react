/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // {process.env.dbPath}
    dbPath: 'mysql... (ex. de variável de ambiente)'
  }
}

module.exports = nextConfig
