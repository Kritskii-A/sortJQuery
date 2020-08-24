const sectorAll = "#list .item"; //sector of items
const sectorId = "#list"; //sector ID
const inputName = "#SearchItem"; // ID input search

let items = $(sectorAll);

//return all items
const allItems = () => {
  return (items = $(sectorAll));
};

// sort cost
const buttonCost = document.querySelector(".costSort");
buttonCost.onclick = () => {
  allItems();
  minMax("cost", buttonCost);
};

//sort ABC
const buttonAbc = document.querySelector(".costAbc");
buttonAbc.onclick = () => {
  allItems();
  minMax("sort", buttonAbc);
};

//FN Sorts
let i = 0;
const minMax = (typeSort, sector) => {
  if (i === 0) {
    sort123(typeSort);
    sector.classList.remove("down");
    sector.classList.add("up");
    i++;
  } else {
    sort321(typeSort);
    sector.classList.remove("up");
    sector.classList.add("down");
    i--;
  }
};

function sort123(typeSort) {
  arItems = $.makeArray(items);
  arItems.sort(function (a, b) {
    return $(a).data(typeSort) - $(b).data(typeSort);
  });
  $(arItems).appendTo(sectorId);
}

function sort321(typeSort) {
  arItems = $.makeArray(items);
  arItems.sort(function (a, b) {
    return $(b).data(typeSort) - $(a).data(typeSort);
  });
  $(arItems).appendTo(sectorId);
}

// FN SEARCH
function search() {
  let itemSearch = items;
  $(inputName).keyup(function () {
    $(this).val() == "" ? $(items).appendTo(sectorId) : search(this);
  });

  const search = function (inElem) {
    itemSearch.remove();
    for (let n = 0; n < itemSearch.length; n++) {
      if (
        itemSearch[n].textContent
          .toLowerCase()
          .indexOf($(inElem).val().toLowerCase()) >= 0
      ) {
        $(itemSearch[n]).appendTo(sectorId);
      }
    }
  };
}

search();
