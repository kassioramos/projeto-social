document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active")
      })
    })
  

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
 
    const backToTopButton = document.createElement("button")
    backToTopButton.innerHTML = "↑"
    backToTopButton.className = "back-to-top"
    document.body.appendChild(backToTopButton)
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block"
      } else {
        backToTopButton.style.display = "none"
      }
    })
  })
  
