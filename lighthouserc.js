module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start'
    },
    assertions: {
      'categories:performance': ['error', { minScore: 0.9 }],
      'categories:accessibility': ['error', { minScore: 0.9 }],
      'categories:best-practices': ['error', { minScore: 0.9 }],
      'categories:seo': ['error', { minScore: 0.9 }],
      'first-contentful-paint': ['error',  { maxNumericValue: 100}],
      'interactive': ['error',  { maxNumericValue: 5000}]
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-results'
    }
  }
}
