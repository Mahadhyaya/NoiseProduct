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
const PRO = document.getElementById("PRO");
const pro = document.getElementsByClassName('pro');
const so = document.getElementsByClassName('so');

// PRO.addEventListener("mouseover", () => {
//   console.log("Hovered");
//   contains.classList.toggle("d-none");
//   // contains.classList.add("hoverMenus");
// });

// so[0].addEventListener('mouseleave', () => {
//   contains.classList.toggle("d-none");
// })


var var1 = false;

// lab.addEventListener("mouseover", () => {
//   console.log("Hovered");
//   liteInfo.classList.toggle("d-none");
//   // liteInfo.classList.add("hoverMenus");
//   var1 = false;
//   console.log("value", var1);
// });



// lab.addEventListener("mouseleave", () => {
//   var1 = true;
//   console.log("leaved");
//   pro[0].addEventListener('mouseover', () => {
//     // liteInfo.classList.toggle("d-none");
//     var1 = false;
//     console.log("leaveds Values", var1);
//   })
//   pro[0].addEventListener('mouseleave', () => {
//     if(var1) {
//       liteInfo.classList.toggle("d-none");
//     }
//     liteInfo.classList.toggle("d-none");
//     var1 = true;
//     console.log("leaveds Values", var1);
//   })
 
  
//   // liteInfo.classList.add("hoverMenus");
// });


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





// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Item Added', 'success')
//   })
// }


const dialogue = document.getElementById('par');
const body = document.getElementById('bd')
const ok = document.getElementById('ok');

function show() {
  dialogue.classList.remove('d-none');
  body.style.overflowY="hidden";
}

function hides() {
  dialogue.classList.add('d-none');
  body.style.overflowY="unset";
}

ok.addEventListener('click', () => {
  hides();
})