let modal = document.querySelector ('.modal');
let pages = document.querySelector('.pages');
let cardsBlock = document.querySelector('#cardsBlock').children.length;
let numOfRepeat = 6;
let buttonPage = "";
for (let i = 1; i <= numOfRepeat; i++) {
  buttonPage += "<span data-page=" + i + "  class=\"interactiveBtn" + "\"" + "id=\"page" + i + "\">" + i + "</span>";
}
pages.innerHTML = buttonPage;
let cards = document.querySelectorAll('.card');
for (let j = 0; j <= cardsBlock; j++) {
  if (j < cardsBlock) {
    cards[j].style.display = 'flex';
  }
}
let selectedPage = document.getElementById("page1");
selectedPage.classList.add("selected");
function pageClick (event) {
  let e = event || window.event;
  let target = e.target;
  let idCard = target.id;
  if (target.tagName.toLowerCase() != "span") return;
  let dataPage = +target.dataset.page;
  selectedPage.classList.remove("selected");
  selectedPage = document.getElementById(idCard);
  selectedPage.classList.add("selected");

  let j = 0;
  for (let k = 0; k < cardsBlock; k++) {
    pageNum = cards[k].dataset.page;
    if (pageNum <= dataPage || pageNum >= dataPage)
      cards[k].style.display = "none";
  }
  for (let i = dataPage; i < cardsBlock; i++) {
    if (j >= numOfRepeat) break;
    cards[i].style.display = "flex";
    j++;
  }
}