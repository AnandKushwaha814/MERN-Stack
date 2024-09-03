## 1. What is `Emmet` ?

- Emmet is a tool that makes coding faster and more fun, especially when you're building web pages!
- Saves Time: You write less, and Emmet writes more for you.

* Time-Saver:

- Less Mistakes: Since Emmet writes the code, you make fewer mistakes.

## 2. Difference between a `Library and Framework` ?

### Library

- `Collection of Tools`: React is a JavaScript library for building user interfaces, especially for single-page applications.
- A library is a collection of reusable code that provides a specific functionality or set of functionalities.
- Libraries are typically used to perform a specific task
- React

### Framework

- Structure and Tools:
- It is a set of pre-defined components, tools, and rules that govern how an application is built. Frameworks are typically used to build applications that require a specific architecture or design pattern.
- React = Library: You’re in control, and you use React like a toolkit to build your app.
- Framework = Framework: The framework is in control, and it tells you how to build your app

## 3. What is `CDN` ? why do we `use` it ?

- CDN stands for `Content Delivery Network`. It is a network that helps to speed up web page loading for web users by distributing content across different servers located in various geographic locations.
- A CDN is a network of servers that helps deliver website content faster and more reliably by serving it from the closest server to the user. It improves load times, reduces the burden on your main server, and enhances the overall user experience.

- Faster Loading Times:
- Reduced Server Load:
- Improved Reliability:
- Better User Experience:
- Security:

## 4. Why Is `React known as React` ?

- React is known as React due to its ability to "react" to changes in the application state. The name was chosen by Jordan Walke, a software engineer at Facebook, who developed the initial version of the library.
- React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.
- React is known as React due to its ability to efficiently react to changes in the application state, making it a powerful and scalable solution for building user interfaces.

## 5. What is `crossorgin in script tag` ?

- The `crossorigin` attribute in a script tag is used to specify how the browser should handle cross-origin requests for scripts. Cross-origin requests occur when a web page requests a resource from a different origin (domain, protocol, or port) than the one the web page was loaded from.

- the `crossorigin` attribute in a script tag is used to specify how the browser should handle cross-origin requests for scripts. It can have two values: `anonymous` and `use-credentials`. You should use this attribute with caution and only when necessary, as it can increase the risk of XSS attacks.

## 6. What is difference `between React and ReactDOM` ?

- React and ReactDOM are two separate libraries that work together to enable building and rendering React applications in the browser. While React provides the core functionality for building user interfaces, ReactDOM provides the necessary glue layer to render and update React components in the browser's DOM.

- React is the library you use to build and define UI components.
- ReactDOM is the library that allows those components to be rendered and interact with the DOM in web browsers.
- They work together to build web applications, with React focusing on the components and ReactDOM focusing on getting those components onto the web page.

## 7. What is difference between `react.development.js` and `react.production.js` file via CDN?

- the choice between `react.development.js` and `react.production.js` depends on your environment and priorities. If you need debugging and warning messages during development, use `react.development.js`. For production environments where performance and file size are crucial, use `react.production.js`.

## 8. What is `async and defer`?

- `async` when you want to load a script that doesn't rely on the HTML document being fully loaded, and you want to improve page load times.
- `defer` when you want to load a script that relies on the HTML document being fully loaded, and you want to ensure that the script executes after the document has been fully loaded.

## 9. What is `NPM`?

- `NPM` stands for `Node Package Manager`.
- `NPM` allows users to easily `install, update`, and manage packages `(libraries, frameworks, and tools)` for their JavaScript projects. It provides a centralized registry of packages that can be easily searched, downloaded, and installed.

## 10. What is `Parcel/webpack` why `do we need it`?

- `Parcel` works great for building single or multi-page React applications. It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies out of the box.

#### Parcel Features

- HMR (Hot Module Replacement) - parcel keeps track of file \* changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- DEV and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- HTTPS in dev

- `Webpack` in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies. It takes all of the individual JavaScript files and other assets in a project, such as images and CSS, and combines them into a single bundle that can be loaded by the browser.

## 11. What is `.parcel-cache` ?
* `.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## 12. What is `npx`?

- `npx` is a package runner tool that comes bundled with npm (Node Package Manager) version 5.2 and higher.

- `npx` allows you to execute packages without installing them globally or locally. It's a convenient way to use a package without polluting your project's `node_modules` directory or your system's global package directory.

## 13. What is difference between `dependencies` vs `devDependencies`?

A: `Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. `DevDependencies` should contain modules/packages a developer needs during development. such as, `parcel, webpack, vite, mocha`. `These packages are necessary only while you are developing your project, not necessary on production. To save a dependency as a devDependency on installation we need to do,

## 14. What is `Tree shaking`?

- `Tree shaking` is a technique used to eliminate dead code (i.e., unused code) from your final bundle. It's called `tree shaking` because it's like shaking a tree to remove the dead leaves (unused code).
- It refers to the process of removing unused code from a bundle, resulting in a smaller bundle size.
- `Tree shaking` is typically performed by bundlers like Webpack and Rollup, which analyze.
- the process of removing unused code from your final bundle.

## 15. What is `Hot Module Replacement`?

- `Hot Module Replacement (HMR)` is a feature in Webpack that allows you to update modules in your application without a full page reload. This means that when you make changes to your code, the updated modules are injected into the running application, preserving the state of the application.

## 16. List down your `favorite 5 superpower of parcel` and `describe any 3` of them in your own words?

A: 5 superpowers of Parcel:

- `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
- `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
- `Image optimization`
- `Caching while development`

## 17. What is `.gitignore` ? What should `we add` and `not add` into it?

- The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. `package-lock.json` should `not add` into your .`gitignore` file.

## 18. What is the difference between `package.json` and `package-lock.json`?

- `package.json` is a JSON file that contains metadata about your project, such as its name, version, dependencies, and scripts. It is used by npm (Node Package Manager) to manage dependencies and scripts for your project.
- `package-lock.json` is a JSON file that contains a snapshot of the dependencies in your project, including their exact versions. It is generated by npm when you run `npm install` and is used to ensure that the dependencies are installed consistently across different environments.

## 19. Why should I not modify `package-lock.json`?

- `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## 20. What is `node_modules` ? Is it a good idea to push that on git?

- `node_modules` is a directory where npm (Node Package Manager) installs dependencies for a project. When you run `npm install` or `yarn install`, the required packages are downloaded and stored in this directory.`Don't push node_modules` in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## 21. What is the `dist` folder?

- The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the `/dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

## 22. What is `browserslist`?

- `Browserslist` is a configuration tool that allows you to specify which browsers and versions your project should support.It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## 24. What is `JSX`?

- `JSX` stands for `JavaScript XML`. JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is commonly used in React, a popular JavaScript library for building user interfaces. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.

## 25. Superpowers of `JSX`.

- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

## 26. Role of `type` attribute in script tag? What options can I use there?

- The `type` attribute in a `<script>` tag specifies the type of script or data contained within the tag. It is used to identify the language of the script or the format of the data.

## 27. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

\*`{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. The `{}` can embed a javascript expression or a variable inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
