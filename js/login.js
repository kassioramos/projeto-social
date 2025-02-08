document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")
  const showRegisterLink = document.getElementById("showRegister")
  const registerSection = document.getElementById("register")

 
  const adminUser = {
    name: "adm",
    email: "adm@gmail.com",
    password: "123",
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      if (email === adminUser.email && password === adminUser.password) {
        localStorage.setItem("userLoggedIn", "true")
        localStorage.setItem("userName", adminUser.name)
        alert("Login bem-sucedido!")
        window.location.href = "../index.html"
      } else {
        alert("Email ou senha incorretos.")
      }
    })
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Registro não disponível no momento. Por favor, use a conta de administrador.")
    })
  }

  if (showRegisterLink) {
    showRegisterLink.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Registro não disponível no momento. Por favor, use a conta de administrador.")
    })
  }
})

