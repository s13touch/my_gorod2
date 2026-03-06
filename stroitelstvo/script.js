const CHANNELS_DATA = {
  "Жлобин": { subscribers: "40 000+", dailyViews: "16–18 тыс.", monthlyViews: "35 тыс.+", audienceNote: "Аудитория города Жлобин" },
  "Светлогорск": { subscribers: "21 000+", dailyViews: "6–7 тыс.", monthlyViews: "19 тыс.+", audienceNote: "Аудитория города Светлогорск" },
  "Рогачёв": { subscribers: "3 600+", dailyViews: "1 200+", monthlyViews: "3 000+", audienceNote: "Аудитория города Рогачёв" },
  "Мозырь": { subscribers: "17 000+", dailyViews: "5–6 тыс.", monthlyViews: "16 тыс.+", audienceNote: "Аудитория города Мозырь" }
};

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".channels-tabs__item");
  const panelTitle = document.getElementById("channels-panel-title");
  const panelSubscribers = document.getElementById("ch-panel-subscribers");
  const panelDaily = document.getElementById("ch-panel-daily");
  const panelMonthly = document.getElementById("ch-panel-monthly");
  const panelNote = document.getElementById("ch-panel-note");

  if (tabs.length && panelTitle && panelSubscribers) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const city = tab.getAttribute("data-city");
        const data = CHANNELS_DATA[city];
        if (!data) return;

        tabs.forEach((t) => {
          t.classList.remove("channels-tabs__item--active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("channels-tabs__item--active");
        tab.setAttribute("aria-selected", "true");

        panelTitle.textContent = city;
        panelSubscribers.textContent = data.subscribers;
        panelDaily.textContent = data.dailyViews;
        panelMonthly.textContent = data.monthlyViews;
        panelNote.textContent = data.audienceNote;
      });
    });
  }

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
