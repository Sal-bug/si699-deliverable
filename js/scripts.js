/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Autocompletion code
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });

    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

var stockCodes = ['600029.SH', '600115.SH', '600132.SH', '600139.SH', '600242.SH', '600258.SH', '600303.SH', '600330.SH', '600399.SH', '600408.SH', '600416.SH', '600456.SH', '600486.SH', '600515.SH', '600546.SH', '600563.SH', '600570.SH', '600580.SH', '600599.SH', '600612.SH', '600690.SH', '600702.SH', '600741.SH', '600754.SH', '600845.SH', '600872.SH', '600885.SH', '600985.SH', '601012.SH', '601020.SH', '601021.SH', '601208.SH', '601615.SH', '601689.SH', '601865.SH', '601966.SH', '603050.SH', '603121.SH', '603127.SH', '603181.SH', '603185.SH', '603186.SH', '603259.SH', '603267.SH', '603339.SH', '603345.SH', '603378.SH', '603416.SH', '603456.SH', '603489.SH', '603507.SH', '603517.SH', '603583.SH', '603589.SH', '603605.SH', '603650.SH', '603678.SH', '603690.SH', '603699.SH', '603786.SH', '603806.SH', '603816.SH', '603833.SH', '603885.SH', '603899.SH', '603960.SH', '603989.SH', '688025.SH', '688089.SH', '688111.SH', '688116.SH', '688139.SH', '688188.SH', '688300.SH', '688363.SH', '688388.SH', '000333.SZ', '000408.SZ', '000513.SZ', '000525.SZ', '000606.SZ', '000669.SZ', '000860.SZ', '000969.SZ', '002008.SZ', '002009.SZ', '002025.SZ', '002032.SZ', '002036.SZ', '002050.SZ', '002064.SZ', '002176.SZ', '002179.SZ', '002180.SZ', '002182.SZ', '002192.SZ', '002222.SZ', '002245.SZ', '002247.SZ', '002250.SZ', '002256.SZ', '002318.SZ', '002353.SZ', '002358.SZ', '002402.SZ', '002409.SZ', '002410.SZ', '002411.SZ', '002415.SZ', '002417.SZ', '002436.SZ', '002444.SZ', '002459.SZ', '002460.SZ', '002466.SZ', '002475.SZ', '002508.SZ', '002531.SZ', '002555.SZ', '002568.SZ', '002572.SZ', '002597.SZ', '002601.SZ', '002602.SZ', '002640.SZ', '002643.SZ', '002648.SZ', '002650.SZ', '002733.SZ', '002738.SZ', '002776.SZ', '002812.SZ', '002821.SZ', '002829.SZ', '002859.SZ', '002876.SZ', '002906.SZ', '002920.SZ', '002967.SZ', '002970.SZ', '300014.SZ', '300025.SZ', '300034.SZ', '300035.SZ', '300101.SZ', '300112.SZ', '300122.SZ', '300133.SZ', '300144.SZ', '300150.SZ', '300171.SZ', '300177.SZ', '300207.SZ', '300258.SZ', '300263.SZ', '300281.SZ', '300285.SZ', '300316.SZ', '300322.SZ', '300347.SZ', '300348.SZ', '300395.SZ', '300407.SZ', '300413.SZ', '300416.SZ', '300438.SZ', '300445.SZ', '300448.SZ', '300449.SZ', '300451.SZ', '300470.SZ', '300493.SZ', '300499.SZ', '300510.SZ', '300520.SZ', '300538.SZ', '300541.SZ', '300568.SZ', '300586.SZ', '300593.SZ', '300604.SZ', '300626.SZ', '300628.SZ', '300638.SZ', '300661.SZ', '300685.SZ', '300687.SZ', '300693.SZ', '300699.SZ', '300706.SZ', '300707.SZ', '300724.SZ', '300747.SZ', '300768.SZ', '300775.SZ', '300777.SZ', '300782.SZ', '300788.SZ', '300806.SZ', '300810.SZ'];
autocomplete(document.getElementById("stockInput"), stockCodes);
autocomplete(document.getElementById("stockInput1"), stockCodes);

function add_stock() {
  var text = document.getElementById('stockInput1').value
  document.getElementById("stockInput1").value = ""

  var div = document.getElementById("stock-list");

  _button = document.createElement("button");
  _button.innerHTML = text;
  _button.onclick = function() {
    this.remove();
  }
  _button.type = 'button'

  div.appendChild(_button);
}


