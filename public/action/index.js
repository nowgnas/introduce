function showtab(a) {
  for (i = 0; i < 4; i++) {
    let target = document.getElementById("tab" + i);
    let back = document.getElementsByClassName("buttonText" + i);

    if (i == a) {
      target.style.display = "block";
      back.style.color = "red";
    } else {
      target.style.display = "none";
      back.style.color = "blue";
    }
  }
}
