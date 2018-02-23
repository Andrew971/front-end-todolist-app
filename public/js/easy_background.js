
function easy_background(selector, sld_args) {

  function empty_img(x) {
    if (x) {
      return "<img src='" + x + "'>";
    } else {
      return "";
    }
  }

  // default delay value
  var def_del = 30000;

  var p = document.createElement("div");
  p.innerHTML = " ";
  p.classList.add("easy_slider");

  document.body.insertBefore(p, document.body.firstChild);

  sld_args.slide.forEach(function (v, i) {
    if (v) {
      document.querySelector(".easy_slider").innerHTML += empty_img(v);
      if (typeof sld_args.delay[i] == 'undefined' || typeof sld_args.delay[i] == '' || sld_args.delay[i] == 0) {
        sld_args.delay[i] = def_del;
      }
    }

  });

  //add various style on selector
  document.querySelector(".easy_slider").style.display = "none";


  //add various style on selector
  document.querySelector(selector).style.backgroundSize = "cover";
  document.querySelector(selector).style.backgroundRepeat = "no-repeat";
  document.querySelector(selector).style.backgroundPosition = "center center";


  setTimeout(function () {
    //add various style on selector
    document.querySelector(selector).style.WebkitTransition = "all 0.5s ease-in";
    document.querySelector(selector).style.MozTransition = "all 0.5s ease-in";
    document.querySelector(selector).style.MsTransition = "all 0.5s ease-in";
    document.querySelector(selector).style.OTransition = "all 0.5s ease-in";
    document.querySelector(selector).style.transition = "all 0.5s ease-in";
  }, 100);



  function slider() {
    //this n is number of row  in object - if first row one function if more than 1 then other
    let n = 1;
    //li collection previous delays from previous slides
    let li = 0;

    //switching all images one by one
    sld_args.slide.forEach((image, indexDelay)=>{
      //here go all slides except first
      if (n > 1) {
        //set delay from collected number from previous slides
        var delay = li;
        setTimeout(()=> {

          document.querySelector(selector).style.backgroundImage = "url('" + image + "')";

        }, delay); // >1
        //collecting delays from curent
        li = li + sld_args.delay[indexDelay];

      } else { //this function for only  first slide

        //next row
        n++;
        //collect delay first time
        li = sld_args.delay[indexDelay];

        document.querySelector(selector).style.backgroundImage = "url('" + image + "')";

      }

    });

  };

  slider();

  setInterval(function () { // REPEAT

    slider();
    //here used length of array of delays in object instead you tot_time variable
  }, sld_args.delay.length);

}
