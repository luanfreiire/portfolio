export default function initMenuMobile() {
  const btnMobile = document.querySelector('[data-mobile="btn-mobile"]');
  const faideMobile = document.querySelector('[data-mobile="faide-mobile"]');

  // abrir menu mobile
  function abrirFaide() {
    faideMobile.classList.add("active");
  }
  btnMobile.addEventListener("click", abrirFaide);

  // fechar menu mobile
  function fecharFaide() {
    faideMobile.classList.remove("active");
  }

  faideMobile.addEventListener("click", fecharFaide);
}
