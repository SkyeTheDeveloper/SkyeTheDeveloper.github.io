function setImage() {
  const current_date = new Date()
  const current_month = current_date.getMonth()
  const icon = document.getElementById("icon")
  
  if (icon) {
    let image_path = "icons/"
    switch (current_month) {
      case 0:
        image_path += "newyears.png"
        break;
      case 1:
        image_path += "valentines.png"
        break;
      case 2:
        image_path += "stpattys.png"
        break;
      case 3:
        image_path += "easter.png"
        break;
      case 5:
        image_path += "pride.png"
        break;
      case 9:
        image_path += "halloween.png"
        break;
      case 11:
        image_path += "christmas.png"
        break;
      default:
        image_path += "default.png"
        break
    }
    icon.src = image_path
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  setImage()
})
