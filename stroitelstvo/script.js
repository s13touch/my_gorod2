document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    if (!btn) return;

    const initialText = btn.textContent;
    btn.textContent = "Заявка отправлена";
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = initialText;
      btn.disabled = false;
    }, 1600);
  });
});
