#!/bin/bash
# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete! Your site should be live soon."
echo "Check your GitHub repository settings to find the published URL."
