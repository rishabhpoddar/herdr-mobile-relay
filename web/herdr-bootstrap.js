const e = new URL(window.__HERDR_ENTRY__ || "/builds/0.25.1-494-44532c3a3a65ac6a/index.html", location);
  e.search = location.search;
  e.hash = location.hash;
  location.replace(e);
