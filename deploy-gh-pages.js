// GitHub Pages deployment script
import { exec } from 'child_process';

console.log('Starting GitHub Pages deployment process...');

// Execute the deploy.sh script
exec('./deploy.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  
  console.log(stdout);
});