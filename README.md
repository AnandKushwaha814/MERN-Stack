# MEARN Full Stack

- Return a single root element.'. multiple element then use fragment <>.......</>
- Close every Tags
- camelCase use (Starting small and second captial)
- make any function and variable outside of return {}
  {()=>}
- {} for code resuablity,
- component = nothing but jsx use marup
- component name alywas start with Capital Letter
- class based
- functional
- Props Parent to child
- pass number using {}
- pass array {["",""]}
- destructuring {abc,def,ghi}
- componet reusable functional
- vite web package
- library- may function
- framework- may library big
- package.json =meta data about data

## Create a new repository on the command line

- echo "# project-demo" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/AnandKushwaha814/MERN-Stack.git
- git push -u origin main

## push an esisting repository from the command line

- git remote add origin https://github.com/AnandKushwaha814/MERN-Stack.git
- git branch -M main
- git push -u origin main

## For any chages

- git add .
- git commit -m "first commit"
- git branch -M origin main

## Installing Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

### tailwind.config.js

- /** @type {import('tailwindcss').Config} \*/
  export default {
  content: [
  "./index.html",
  "./src/**/\*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

## React Icon Installing
* npm i react-icons
* https://react-icons.github.io/react-icons/