module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  