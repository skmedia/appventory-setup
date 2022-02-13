module.exports = {
  apps: [
    {
      name: 'Frontend',
      cwd: './appventory-frontend',
      script: 'yarn dev',
      watch: './appventory-frontend'
    },
    {
      name: 'API',
      cwd: './appventory-api',
      script: 'npm run start:dev ',
      watch: './appventory-api'
    }
  ]
};
