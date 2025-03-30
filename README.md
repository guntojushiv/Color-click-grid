# React 3x3 Grid Project

## Overview
This project is a simple **3x3 grid** where:
- Clicking on a box changes its color to **green**.
- Clicking on the last box triggers a **sequence animation**, turning all clicked boxes **orange** in the order they were clicked.

## Features
- **Interactive UI**: Click to change box colors.
- **State Management**: Uses React's `useState` to track colors and click order.
- **Animation**: A sequence-based color change after the last box is clicked.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Steps to Run
1. **Clone the Repository**
   ```sh
   git clone (https://github.com/guntojushiv/Color-click-grid.git)
   cd color-click-grid
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Start the Development Server**
   ```sh
   npm start
   ```
   The app runs at **http://localhost:3000/**.

## Deployment
To deploy the project to GitHub Pages:
1. Add the following to `package.json`:
   ```json
   "homepage": "(https://github.com/guntojushiv/Color-click-grid.git)"
   ```
2. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
3. Add deploy scripts in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy:
   ```sh
   npm run deploy
   ```
The project will be live at:  
**(https://color-click-grid.vercel.app/)**

## Technologies Used
- **React.js** for UI rendering
- **JavaScript (ES6)** for logic
- **CSS (Inline Styling)** for styling
- **GitHub Pages** for deployment

## Folder Structure
```
color-click-grid/
├── src/
│   ├── components/
│   │   ├── Grid.js  (Main Grid Component)
│   ├── App.js  (Main App Component)
│   ├── index.js  (Entry Point)
├── public/
├── package.json
├── README.md
```

## Future Enhancements
- Add sound effects on click.
- Use **CSS animations** for a smoother transition.
- Make the grid size configurable.

## Author
**Your Name**  
GitHub: (https://github.com/guntojushiv/)
LinkedIn: (https://www.linkedin.com/in/shiva-guntoju-944144241/)

---
**Happy Coding! 🚀**

