/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {
      environment: deployTarget,
      outputPath: 'tmp/a-deploy-dist',
    },
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      host: process.env['host'],
      username: process.env['username'],
      password: process.env['password'],
      remoteDir: process.env['remoteDir'],
      privateKeyFile: process.env['privateKey'],
      allowOverwrite: true
    },
    rsync:{
      host: process.env['username'] + '@' + process.env['host'],
      dest: process.env['remoteDir'],
      username: process.env['username'],
      privateKey: process.env['privateKey'],
      delete: false
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV["ssh-index"]["distDir"] = ENV.build.outputPath
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
