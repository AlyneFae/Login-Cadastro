function senhaRevelada() {
    let s = document.getElementById("senha");
    if (s.type === "password") {
      s.type = "text";
    } else {
      s.type = "password";
    }
}