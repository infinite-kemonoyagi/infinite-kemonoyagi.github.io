const icon = document.getElementsByClassName(".page-icon").item(0);

if (icon) {
  var icons = {};
  await fetch("/source/scripts/randomIconsList.json")
    .then(a => a.json())
    .then(b => (icons = b))
    .catch(error => console.error(error));

  const iconList = Object.values(icons);
  console.log(iconList);

  call(iconList);
}

/**
 * @param {string[]} iconList
 */
function call(iconList) {
  const random = Math.floor(Math.random() * iconList.length);

  icon.setAttribute("href", iconList[random]);
}
