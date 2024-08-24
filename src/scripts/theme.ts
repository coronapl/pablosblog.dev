(function () {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const theme = prefersDarkScheme ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
})();
