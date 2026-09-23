// Click-through navigation. Pages with <body data-next="..."> advance on a
// click anywhere; pages without it (work.html) only navigate through their
// own links. Mouse/touch only, by design: no keyboard shortcuts.
document.addEventListener('click', (event) => {
  const next = document.body.dataset.next;
  if (!next || event.target.closest('a')) return;
  // Selecting text (say, copying a quote) shouldn't count as a click.
  if (String(window.getSelection())) return;
  window.location.href = next;
});
