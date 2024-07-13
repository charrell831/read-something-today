/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination:
                process.env.NODE_ENV === 'development'
                    ? 'http://127.0.0.1:5000/api/:path*'
                    : '/api/',
            },
        ]
    },

    async headers() {
        return [
          {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'max-age=604800',
              }
            ],
          },
        ]
      },
};



export default nextConfig;
