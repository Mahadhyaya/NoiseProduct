const men = document.getElementById("menus");
var it = document.getElementById("ite");
var bn = document.getElementById("bn");
var bd = document.getElementById("bd");

var size = window.innerWidth;
console.log(size);

var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

const profileMenu = document.getElementById("prof");
profileInfo = document.getElementById("prof-related");
close = document.getElementById("closes");

const lab = document.getElementById("lab");
liteInfo = document.getElementById("littelIn");

const contains = document.getElementById("containse");
PRO = document.getElementById("PRO");
// document.getElementsByClassName('pro')

PRO.addEventListener("mouseover", () => {
  console.log("Hovered");
  contains.classList.toggle("d-none");
  contains.classList.add("hoverMenus");
});

lab.addEventListener("mouseover", () => {
  console.log("Hovered");
  liteInfo.classList.toggle("d-none");
  liteInfo.classList.add("hoverMenus");
});

// lab.addEventListener('mouseout', () => {
//   liteInfo.classList.toggle('d-none')
//   liteInfo.classList.remove('hoverMenus');
// })

profileMenu.addEventListener("click", () => {
  console.log("clicked");
  profileInfo.classList.add("profExpand");
  profileInfo.classList.toggle("d-none");
});

close.addEventListener("click", () => {
  console.log("clicked");
  profileInfo.classList.remove("profExpand");
  profileInfo.classList.toggle("d-none");
});

// if(size > 1000) {
//   bn.classList.toggle('d-none');
//   it.classList.remove('expand');
// }
//   console.log("coming");

//   bn.classList.toggle('d-none');
//   it.classList.remove('expand');
// }

men.addEventListener("click", () => {
  // console.log("clicked")
  it.classList.add("expand");
  it.classList.toggle("d-none");
  men.classList.toggle("d-none");
  bn.classList.toggle("d-none");
});
bn.addEventListener("click", () => {
  console.log("clicked");
  it.classList.remove("expand");
  it.classList.toggle("d-none");
  men.classList.toggle("d-none");
  bn.classList.toggle("d-none");
});

function addToCart() {
  alert("Item Added To Cart");
}
