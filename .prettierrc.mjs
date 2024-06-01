// From https://github.com/withastro/prettier-plugin-astro/blob/main/README.md#recommended-configuration

// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
  };