document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a")
    const sections = document.querySelectorAll(".content")
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
    const homeLink = document.querySelector(".home-link")
    const overlay = document.querySelector(".overlay")
  
  // Função para alternar o menu
  function toggleMenu() {
    nav.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.style.overflow = nav.classList.contains("active") ? "hidden" : ""
  }

  // Função para fechar o menu
  function closeMenu() {
    nav.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  }
  
    // Função para mostrar a seção
    function showSection(target) {
      sections.forEach((section) => {
        section.classList.remove("active")
        if (section.id === target) {
          section.classList.add("active")
        }
      })
      closeMenu()
    }
  
    // Event Listeners
    menuToggle.addEventListener("click", toggleMenu)
    overlay.addEventListener("click", closeMenu)
  
    // Links de navegação
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = this.getAttribute("data-target")
        showSection(target)
      })
    })
  
    // Link do título (home)
    homeLink.addEventListener("click", () => {
      showSection("apresentacao")
    })
  
    // Fechar menu ao redimensionar para desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    })
  
    // Fechar menu com tecla Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu()
      }
    })
  
    // Mostrar seção inicial
    showSection("apresentacao")
  })
  
  