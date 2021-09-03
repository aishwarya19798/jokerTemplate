const trailerLink = document.querySelector(".trailerLink");
const video = document.querySelector(".video");
const cross = document.querySelector(".cross");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

let menuOpen = false;

trailerLink.addEventListener("click", () => {
  video.style.display = "flex";
});

cross.addEventListener("click", () => {
  video.style.display = "none";
});

menuIcon.addEventListener("click", async () => {
  console.log(menuOpen);
  if (menuOpen == false) {
    menuOpen = true;
    let i = 500;
    for (i = 500; i >= 0; i -= 50) {
      menu.style.transform = `translateX(${i}px)`;
      await sleep(2);
    //   console.log(i);
    }
  } else {
    menuOpen = false;
    for (i = 0; i < 500; i += 50) {
      menu.style.transform = `translateX(${i}px)`;
      await sleep(2);
    //   console.log(i);
    }
  }
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
