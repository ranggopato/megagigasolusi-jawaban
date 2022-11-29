// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://159.223.57.121:8080/:path*",
      },
    ];
  },
};
