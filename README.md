# Bright Reach Media | Performance Marketing Agency

This is a high-performance portfolio for Bright Reach Media, built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1.  **Push to GitHub**: Push your code to the `main` branch of your repository.
2.  **Enable GitHub Actions**: Go to your repository settings on GitHub -> **Actions** -> **General** and ensure "Allow all actions and reusable workflows" is selected.
3.  **Configure Pages**: Go to **Settings** -> **Pages**. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  **Wait for Build**: The included workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site.

### Configuration Note:
The `next.config.ts` is currently set with:
- `output: 'export'`: For static site generation.
- `basePath: '/Bright-Reach-media'`: Matches your repository name for correct asset loading on GitHub Pages.

## 🛠️ Local Development

1.  **Install dependencies**: `npm install`
2.  **Run the app**: `npm run dev`
3.  **Build the app**: `npm run build`
