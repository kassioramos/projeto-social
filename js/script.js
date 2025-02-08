document.addEventListener("DOMContentLoaded", () => {
  const storyForm = document.getElementById("storyForm")
  if (storyForm) {
    storyForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Obrigado por compartilhar sua história! Ela será revisada e publicada em breve.")
      storyForm.reset()
    
      const modal = bootstrap.Modal.getInstance(document.getElementById("shareStoryModal"))
      modal.hide()
    })
  }
})

