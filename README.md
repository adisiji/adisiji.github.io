# Mobile App Development Company Website

A professional website for a software house company that specializes in mobile application development, showcasing the company's expertise, projects, and services.

## Features

- Responsive design for all screen sizes
- Dark/light mode with theme persistence
- Interactive animations throughout the site
- Project inquiry form for potential clients
- Client logo carousel
- Services section with flip card animations
- Team and testimonials sections
- Contact form

## Technologies Used

- React.js with TypeScript
- Tailwind CSS
- Framer Motion for animations
- Shadcn UI components
- Express.js backend
- In-memory data storage

## Running Locally

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the port shown in the console

## Deployment

### Deploying to GitHub Pages

This project can be deployed to GitHub Pages using one of the following methods:

#### Option 1: Using the deploy script

Run the deploy script using:

```bash
./deploy.sh
```

This will build the project and deploy it to GitHub Pages.

#### Option 2: Using Node.js

Run the deployment using Node.js:

```bash
node deploy-gh-pages.js
```

### After Deployment

After successful deployment, you can access your site at:
`https://[your-github-username].github.io/[repository-name]/`

Remember to check your GitHub repository settings to ensure GitHub Pages is enabled and points to the correct branch.

## Project Structure

- `client/`: Frontend React application
  - `src/components/`: UI components
  - `src/pages/`: App pages and routes
  - `src/hooks/`: Custom React hooks
- `server/`: Backend Express server
- `shared/`: Shared types and schemas