// sidebar--opened
(function () {
  const openingBtn = document.querySelector(".sidebar__humburger");
  const closingBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  openingBtn.addEventListener("click", openSidebar);
  closingBtn.addEventListener("click", closeSidebar);

  function openSidebar() {
    sidebar.classList.add("sidebar--opened");
  }

  function closeSidebar() {
    sidebar.classList.remove("sidebar--opened");
  }
})();
