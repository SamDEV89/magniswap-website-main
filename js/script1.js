
 
    
    
    $("#closeBtn").on('click', function () {
      $("#modal").hide();
    });
    $("#modalOpen").on('click', function () {
        $("#modal").show();
      });
    function showModal() {
         
        $("#modal").show();       
      
    }
 





    $("#closeBtn").on('click', function () {
      $("#ETH-modal").hide();
    });
    $("#modalOpen").on('click', function () {
      $("#ETH-modal").show();
    });
    function showModal() {
    
      $("#ETH-modal").show();
    }

    $("#closeBtn1").on('click', function () {
      $("#USDT-modal").hide();
    });
    $("#modalOpen1").on('click', function () {
      $("#USDT-modal").show();
    });
    function showModal() {
    
      $("#USDT-modal").show();
    }
    
    
    $("#closeBtn2").on('click', function () {
      $("#CARD-modal").hide();
    });
    $("#modalOpen2").on('click', function () {
      $("#CARD-modal").show();
    });
    function showModal() {
    
      $("#CARD-modal").show();
    }
    



  
  const hamburger = document.querySelector(".ham");
  const header = document.querySelector(".header");
  
  hamburger.addEventListener("click", () => {
    header.classList.toggle("active");
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      pin: false,
      start: "top top",
      end: "bottom bottom",
    },
  });
  
  tl.from(
    ".progress-line",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  );
  
  const API_URL = "https://api.magniswap.io/api/v1"
  $.ajax({
    url: `${API_URL}/stages`,
    success: function(data){
      let stages = JSON.parse(data);
      let start_date = new Date(stages.data[0].start_date).getTime();
      let text= ""
      const today = new Date();
  
      if (today < new Date(stages.data[0].start_date)) {
        start_date = new Date(stages.data[0].start_date);      
        text = "PRESALE WILL START IN";
      }
      if (today > new Date(stages.data[0].start_date) && today < new Date(stages.data[0].end_date)) {
        start_date = new Date(stages.data[0].end_date);      
        text = "PRESALE STAGE 1 WILL ENDED IN";
      }
  
      if (today > new Date(stages.data[1].start_date) && today < new Date(stages.data[1].end_date)) {
        start_date = new Date(stages.data[1].end_date);      
        text = "PRESALE STAGE 2 WILL ENDED IN";
      }		
  
      if (today > new Date(stages.data[2].start_date) && today < new Date(stages.data[2].end_date)) {
        start_date = new Date(stages.data[2].end_date);      
        text = "PRESALE STAGE 3 WILL ENDED IN";
      }    
  
      $('.countdown h5').text(text)
  
      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();
      
        // Find the distance between now an the count down date
        var distance = start_date - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        });
        document.getElementById("hours").innerHTML = hours.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        });
        document.getElementById("minutes").innerHTML = minutes.toLocaleString(
          undefined,
          { minimumIntegerDigits: 2 }
        );
        document.getElementById("seconds").innerHTML = seconds.toLocaleString(
          undefined,
          { minimumIntegerDigits: 2 }
        );
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "PRESALE ENDED";
        }
      }, 1000);    
      
    }
  });
  //countdown timer
  // Set the date we're counting down to
  
  
  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
  
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
  
  window.onscroll = () => {
    if (window.scrollY > 120) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };
  
  var viewportWidth = $(window).width();
  if (viewportWidth < 1200) {
    $(".carousel").flickity({
      wrapAround: true,
      initialIndex: 2,
      draggable: true,
    });
  } else {
    $(".carousel").flickity({
      wrapAround: false,
      initialIndex: 1,
      draggable: false,
    });
  }
  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
      $(".carousel").flickity({
        wrapAround: true,
        initialIndex: 2,
        draggable: true,
      });
    } else {
      $(".carousel").flickity({
        wrapAround: false,
        initialIndex: 1,
        draggable: false,
      });
    }
  });
  