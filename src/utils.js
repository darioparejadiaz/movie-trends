function removeClasses(container) {
  const toRemove = [];
  container.classList.forEach((element) => {
    if (element.startsWith("id")) toRemove.push(element);
  });

  toRemove.forEach((element) => {
    container.classList.remove(element);
  });
}

//*********************************************************************************** */

function removeRareChars(str) {
  if (str.includes("%20")) {
    const newStr = str.replaceAll("%20", " ");
    return newStr;
  } else {
    return str;
  }
}

//*********************************************************************************** */

function createInvalidSearchMessage(message) {
  genericSection.textContent = "";
  div = document.createElement("div");
  div.classList.add("unfounded-container");
  h2 = document.createElement("h2");
  h2.textContent = message;
  img = document.createElement("img");
  img.setAttribute("src", "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e532a4c258ffe237b8ef2c1_peep-2.svg");
  div.append(h2, img);
  genericSection.append(div);
}

//*********************************************************************************** */
