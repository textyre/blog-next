const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@public": path.resolve(__dirname, "public/"),
    };

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   issuer: { and: [/\.(js|ts)x?$/] },
    //   use: [{
    //     loader: '@svgr/webpack',
    //     options: {
    //       svgo: true,
    //       svgoConfig: {
    //         plugins: [
    //           {
    //             name: 'preset-default',
    //             params: {
    //               overrides: {
    //                 removeViewBox: false,
    //               },
    //             },
    //           },
    //         ]
    //       },
    //       titleProp: true,
    //     }
    //   }],
    // });
    return config;
  },
};
