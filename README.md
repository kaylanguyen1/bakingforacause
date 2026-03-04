# Club Website built with React + Vite then hosted on GitHub Pages

## Instructions for Starting a React + Vite Project

1. Have NodeJS and npm installed through website, to check if already installed try following commands in terminal to check version number
```bash
node -v
npm -v
```
2. Create project with Vite and change directory to project directory
```bash
npm create vite@latest my-react-app
cd my-react-app
```
3. Select the React framework in the menu
4. Select JavaScript or a different variant
5. Install necessary dependencies 
```bash
npm install
```
6. Start server to view project locally
```bash
npm run dev
```


## How to Host React + Vite Project on GitHub Pages

1. Create a new repository for the React project and have the React app set up
2. Once React app is set up, navigate to project directory in terminal
```bash
cd my-react-app
```
3. Configure the Vite Base Path (if using Vite). Open the file `vite.config.js` and add under the `plugins` line in `defineConfig()` 
```javascript
base: "/repository-name/",
```
4. React Router's `BrowserRouter` doesn't work on GitHub Pages, so if you need linking in your project, replace it with `HashRouter`. For example, I used it in 
my `main.jsx` file 
```javascript
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>
)
```
5. Prepare app for deployment 
```bash
npm run build
```
6. Install the gh-pages package to help deploy the app to GitHub Pages
```bash
npm install gh-pages --save-dev
```
7. Congifure your package.json file by adding the following commands to the top of the file and in scripts. **This will be different from if you only used React to set up your project. After executing npm run build, Vite's output folder is named 'dist' while Create React App will have its folder named 'build'.Thus, change the 'dist' keyword in the deploy script to 'build' if not using Vite.**
```json
"homepage": "https://your-username.github.io/your-repo-name",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```
8. Deploy the app
```bash
npm run deploy
```
9. Enable GitHub Pages: Go to the repository's "Settings" tab, scroll down to "Pages", then select the "gh-pages" branch as the source for the site.
10. Whenever you make changes to the app, repeat the following commands to build the app then deploy it to GitHub Pages.
```bash
npm run build
npm run deploy
```


## Troubleshooting:
If running into errors with GitHub Pages or while creating the React app, check the Web Developer Tools console in your browser when running the app or after it's deployed on GitHub Pages.
