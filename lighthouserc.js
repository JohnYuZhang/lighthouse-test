module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start'
    },
    assertions: {
      'categories:performance': ['warn', { minScore: 0.9 }],
      'categories:accessibility': ['error', { minScore: 0.9 }],
      'categories:best-practices': ['error', { minScore: 0.9 }],
      'categories:seo': ['error', { minScore: 0.9 }]
    },
    upload: {
      target: 'filesystem'
    }
  }
}
