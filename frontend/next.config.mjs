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
            {
              source: '/api/:path*',
              destination: 
              process.env.NODE_ENV === 'production'
                  ? 'https://www.readsomethingtoday.com/api/:path*'
                  : '/api/',
          },
        ]
    },
};



export default nextConfig;
