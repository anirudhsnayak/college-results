var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/anirudhsnayak/college-results.git', // Update to point to your repository  
        user: {
            name: 'Anirudh Nayak', // update to use your name
            email: 'anirudhsnayak@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)