function random() {
  //remove search bar
  const search = document.querySelector("#search");
  while (search.hasChildNodes()) {
    search.removeChild(search.lastChild);
  }
  //if button not available make it visible
  if (!document.querySelector("#randombtn")) {
    const randomButton = document.createElement("button");
    randomButton.innerHTML = "Click for Images";
    randomButton.onclick = getPics;
    randomButton.id = "randombtn";
    document.querySelector("#button").appendChild(randomButton);
  }
}

function search() {
  const random = document.querySelector("#button");
  while (random.hasChildNodes()) {
    random.removeChild(random.lastChild);
  }

  if (!document.querySelector("#inputText")) {
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.id = "inputText";

    const searchButton = document.createElement("button");
    const icon = document.createElement("i");
    icon.className = "fab fa-searchengin";
    searchButton.appendChild(icon);

    document.getElementById("search").appendChild(searchBar);
    document.getElementById("search").appendChild(searchButton);
    searchButton.onclick = createUrl;
  }
}

function createUrl() {
  let text = document.getElementById("inputText").value;
  console.log(text);
  const s = document.createElement("script");
  s.src = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${text}`;
  document.body.appendChild(s);
  text = "";
}

function getPics() {
  var s = document.createElement("script");
  s.src = "https://www.flickr.com/services/feeds/photos_public.gne?format=json";
  document.body.appendChild(s);
}

function jsonFlickrFeed(json) {
  json.items.forEach((item, index) => {
    var col = document.createElement("div");
    col.className = "col-lg-4 mb-12";

    var card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var anchor = document.createElement("a");
    anchor.href = item.media.m;
    anchor.target = "_blank";

    var image = document.createElement("img");
    image.src = item.media.m;
    image.className = "card-img-top";

    anchor.appendChild(image);
    cardBody.appendChild(anchor);
    card.appendChild(cardBody);
    col.appendChild(card);

    document.querySelector(".row").appendChild(col);
  });
}
