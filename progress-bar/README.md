# React + Vite


Create a Progress Bar component in React.js

This component should accept 3 props:

1. Progress: Representing the current progress in percentage.
2. Direction: (horizontal or vertical)
3. Callback function: This function should be called when the progress reaches 100%.

Note: This component should be reusable and should be able to render multiple components on a single page with different props.

Examples:

1. If the progress is 50, direction is horizontal, then the progress bar should fill from left to right and once it's complete, it should trigger the callback.

Component should look something like this:

<ProgressBar progress={50} direction={'horizontal'} callback={() => console.log('Progress Completed')} />

2. If the progress is 50, direction is vertical, then the progress bar should fill from bottom to top and once it's complete, it should trigger the callback.

Component should look something like this:

<ProgressBar progress={50} direction={'vertical'} callback={() => console.log('Progress Completed')} />


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
