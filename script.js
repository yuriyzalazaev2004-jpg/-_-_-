// FIX: always open site at top (remove anchor scroll)
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }
  window.scrollTo(0, 0);
});

// your existing code below...
