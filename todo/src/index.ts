import { home_page } from "./components/home-page/homePage";
export function onLoad() {
  const main_container = document.getElementById("app");
  //   if (main_container) {
  //     const container = document.createElement("div");
  //     container.textContent = "hello check";
  //     main_container?.appendChild(container);
  //   }
  if (main_container && !main_container.querySelector(".hello-check")) {
    const container = document.createElement("div");
    container.textContent = "hello check";
    container.classList.add("hello-check"); // Add class to check if the element exists
    main_container.appendChild(container);
  }
}
onLoad();
home_page();
