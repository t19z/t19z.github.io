document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.item').forEach(i => {
    i.addEventListener('click', _ => {
      location.href =
        location.origin +
        document.head.dataset.path +
        (i.dataset?.href ?? i.textContent.trim());
    });
  });
});
