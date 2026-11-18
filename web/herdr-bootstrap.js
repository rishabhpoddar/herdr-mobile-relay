const e = new URL(window.__HERDR_ENTRY__ || "/builds/0.25.1-493-7994649106e7b76b/index.html", location);
  e.search = location.search;
  e.hash = location.hash;
  location.replace(e);
