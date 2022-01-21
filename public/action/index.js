function showtab(a) {
  for (i = 0; i < 4; i++) {
    let target = document.getElementById("tab" + i);

    if (i == a) {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  }
}
