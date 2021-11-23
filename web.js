document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
  };

  function myFunction() {
    let bg = document.body.style.background;
    if (bg === 'black') {
      document.body.style.background = "#f4f4ff";
      $(".nav-link").css("color", "#000");
    } else {
      document.body.style.background = "black";
      $(".nav-link").css("color", "#FFF");
    }

  }