/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 
                process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000/api/:path*' 
                    : 'production' ? 'https://resistance-learn-l0fsftws1-charrell831s-projects.vercel.app/api/:path*'
                    : '/api/',
            },
          //   {
          //     source: '/api/:path*',
          //     destination: 
          //     process.env.NODE_ENV === 'production'
          //         ? 'https://resistance-learn-2ah16vtng-charrell831s-projects.vercel.app/api/:path*'
          //         : '/api/',
          // },
        ]
    },
};



export default nextConfig;
