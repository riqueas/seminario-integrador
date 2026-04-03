const query = document.querySelectorAll(".search");
const events = document.querySelectorAll(".card-eventos");
const titles = document.querySelectorAll(".card-titulo");

function queryEvents() {
  let queryDesktop = query[0].value.toLowerCase().trim();
  let queryMobile = query[1].value.toLowerCase().trim();

  for (let i = 0; i < events.length; i++) {
    if (
      titles[i].textContent.toLowerCase().includes(queryDesktop) &&
      titles[i].textContent.toLowerCase().includes(queryMobile)
    ) {
      events[i].style.display = "block";
    } else {
      events[i].style.display = "none";
    }
  }
}

query.forEach((query) => {
  query.addEventListener("input", queryEvents);
});
