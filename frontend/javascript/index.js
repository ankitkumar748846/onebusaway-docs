import "$styles/index.css"
import "$styles/syntax-highlighting.css"

import {
  enableCodeHighlighting,
  insertCodeSnippetCopyButtons
} from "./code_snippets";

import {
  enableScrollToTop,
  saveAndRestoreNavigationPosition
} from "./page_navigation";

import { enableDocSearch } from "./search";

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

// document.addEventListener('DOMContentLoaded', (event) => {
//   const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//   if (isDarkMode) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//   } 

// });
// document.addEventListener('DOMContentLoaded', (event) => {
//   const isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

//   if (isLightMode) {
//     document.documentElement.setAttribute('data-theme', 'light');
//   } 

// });

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//   const newColorScheme = event.matches ? "light" : "dark";
// });


document.addEventListener('DOMContentLoaded', (event) => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    console.log('light mode');
  document.documentElement.setAttribute('data-theme', 'light');
  }
  });

console.info("Bridgetown is loaded!")

document.addEventListener("DOMContentLoaded", function(event) {
  enableCodeHighlighting();
  insertCodeSnippetCopyButtons();
  enableDocSearch('#oba-docs-search-container--desktop');
  enableDocSearch('#oba-docs-search-container--mobile');
  enableScrollToTop();
  saveAndRestoreNavigationPosition();
});
