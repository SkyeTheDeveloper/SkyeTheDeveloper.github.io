function setRank() {
  const tag = document.getElementById("rank")
  if (!tag) return
  const jsonString = '{"rank_level": 0}'
  const rank = JSON.parse(jsonString)

  let image_path = "bmc_dev_tags/"
  switch (Number(rank.rank_level)) {
    case 0: image_path += "jr_dev.png"; break
    case 1: image_path += "dev.png"; break
    case 2: image_path += "sr_dev.png"; break
    case 3: image_path += "head_dev.png"; break
    case 4: image_path += "manager.png"; break
    case 5: image_path += "dev_advisor.png"; break
    default: image_path += "jr_dev.png"; break
  }
  tag.src = image_path
  tag.alt = image_path.replaceAll("bmc_dev_tags/", "").replaceAll(".png", "")
}

document.addEventListener("DOMContentLoaded", () => {
  setRank()
})
