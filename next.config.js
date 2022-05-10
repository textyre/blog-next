const path = require("path");

module.exports = {
  // for mdx
  experimental: { esmExternals: true },
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],

  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@public": path.resolve(__dirname, "public/"),
      "@api": path.resolve(__dirname, "src/api/"),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
          },
        },
      ],
    });

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
