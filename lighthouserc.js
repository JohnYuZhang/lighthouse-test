module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start'
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 100 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error',  { maxNumericValue: 10}],
        'interactive': ['error',  { maxNumericValue: 5000}]
      }
    },
    upload: {
      target: 'lhci',
      serverBaseURL: 'http://infinite-refuge-93024.herokuapp.com/',
      token: '7c02ce69-4c29-4436-ba2c-ca26d12bfd8f'
    }
  }
}
