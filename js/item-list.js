(function () {
  const item = [
    {
      id: "1",
      title: "НЕЛТОН",
      image: "img/nelton.jpg",
    },
    {
      id: "2",
      title: "ЛЮСІ",
      image: "img/lusi.jpg",
    },
    {
      id: "3",
      title: "РОЗА",
      image: "img/roza.jpg",
    },
  ];
  function renderItem(item) {
    const itemContainer = document.querySelector(".container");
    itemContainer.innerHTML = "";
    for (const item of item) {
      itemContainer.innerHTML += `
      <section class="animal_card" id="find_an_animal">
        <div class="container">
          <div class="card">
            <div class="card_3">Анкета №: 22022201</div>
            <div class="card_name">${item.title}</div>
            <div class="card_img">
              <img class="card_img" src="${item.image}" alt="${item.title}" />
            </div>
            <ul class="list_card">
              <li><span> Вид тварини:</span> пес</li>
              <li><span>Дата надходження тварини:</span> 22.02.22</li>
              <li><span>Вік тварини на дату надходження: </span>2 роки</li>
            </ul>
            <button class="btn">Більше інформації</button>
          </div>

          <div class="card">
            <div class="card_3">Анкета №: 520062202</div>
            <div class="card_name">${item.title}</div>
            <div class="card_img">
              <img class="card_img" src="${item.image}" alt="${item.title}" />
            </div>
            <ul lass="list_card">
              <li><span>Вид тварини:</span> кіт/кішка</li>
              <li><span>Дата надходження тварини:</span> 20.06.22</li>
              <li><span>Вік тварини на дату надходження:</span> 2 роки</li>
            </ul>
            <button class="btn">Більше інформації</button>
          </div>

          <div class="card">
            <div class="card_3">Анкета №: 16062206</div>
            <div class="card_name">${item.title}</div>
            <div class="card_img">
              <img class="card_img" src="${item.image}" alt="${item.title}" />
            </div>
            <ul lass="list_card">
              <li><span>Вид тварини:</span> пес</li>
              <li><span>Дата надходження тварини:</span> 16.06.22</li>
              <li><span>Вік тварини на дату надходження: </span>3 роки</li>
            </ul>
            <button class="btn">Більше інформації</button>
          </div>
        </div>
      </section>
      `;
    }
  }

  renderItem(item);
})();
