// GitHub Pages deployment script
import ghpages from 'gh-pages';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function deploy() {
  try {
    console.log('Building the project...');
    await execAsync('npm run build');
    
    console.log('Deploying to GitHub Pages...');
    
    ghpages.publish('dist', {
      message: 'Auto-deployed via deploy.js script',
    }, (err) => {
      if (err) {
        console.error('Deployment error:', err);
        return;
      }
      console.log('Deployment complete! Your site should be live soon.');
      console.log('Check your GitHub repository settings to find the published URL.');
    });
  } catch (error) {
    console.error('Error during build or deployment:', error);
  }
}

deploy();