let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	  backtop.style.opacity = 1;
	} else {
	  backtop.style.opacity = 0;
	}
  }
  
  let modeBtn = document.getElementById("dark-light");

  modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
      this.firstElementChild.src = "images/light.png";
    } else {
      this.firstElementChild.src = "images/dark.svg";
    }
    document.body.classList.toggle("dark");
  }); 

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }
  function openNavbar() {
	document.getElementById("navbar-responsive").style.left = "0";
	// document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
	document.getElementById("navbar-responsive").style.left = "-100%";
	// document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
	toggleBacktop();
  });