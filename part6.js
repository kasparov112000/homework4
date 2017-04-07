  $(document).ready(function() {

      $('#dialog').dialog({
          modal: true,
          autoOpen: false,
          width: 600,
          show: {
              effect: "blind",
              duration: 500
          },
          hide: {
              effect: "explode",
              duration: 300
          }
      }).css("font-size: 20px; background-color: white;");

      $('#instructions').click(function() {
          $('#dialog').dialog('open');
      });
  });

  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

          var dropdowns = document
              .getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }

      }
  }

  function daysOfChris() {

      var i, day, songlyric, n;

      for (i = 1; i < 13; ++i) {

          switch (i) {
              case 1:
                  day = "first";
                  break;
              case 2:
                  day = "second";
                  break;
              case 3:
                  day = "third";
                  break;
              case 4:
                  day = "fourth";
                  break;
              case 5:
                  day = "fifth";
                  break;
              case 6:
                  day = "sixth";
                  break;
              case 7:
                  day = "seventh";
                  break;
              case 8:
                  day = "eighth";
                  break;
              case 9:
                  day = "ninth";
                  break;
              case 10:
                  day = "tenth";
                  break;
              case 11:
                  day = "eleventh";
                  break;
              case 12:
                  day = "twelfth";
                  break;
          }

          document.getElementById("words").innerHTML += "On the " + day + " day of Christmas<br>";
          document.getElementById("words").innerHTML += "My true love gave to me<br>";

          for (n = i; n > 0; n--) {
              switch (n) {
                  case 1:
                      songlyric = "";
                      break;
                  case 2:
                      songlyric = "Two turtle doves<br>";
                      break;
                  case 3:
                      songlyric = "Three French Hens,<br>";
                      break;
                  case 4:
                      songlyric = "Four calling birds,<br>";
                      break;
                  case 5:
                      songlyric = "Five golden rings,<br>";
                      break;
                  case 6:
                      songlyric = "Six geese a laying,<br>";
                      break;
                  case 7:
                      songlyric = "Seven swans a swimming,<br>";
                      break;
                  case 8:
                      songlyric = "Eight maids a milking,<br>";
                      break;
                  case 9:
                      songlyric = "Nine ladies dancing,<br>";
                      break;
                  case 10:
                      songlyric = "Ten lords a leaping,<br>";
                      break;
                  case 11:
                      songlyric = "Eleven pipers piping,<br>";
                      break;
                  case 12:
                      songlyric = "Twelve drummers drumming,<br>";
                      break;
              }
              document.getElementById("words").innerHTML += songlyric;

          }

          if (i > 1) {
              document.getElementById("words").innerHTML += "and a partridge in a pear tree.<br><br>";
          } else {
              document.getElementById("words").innerHTML += "A partridge in a pear tree.<br><br>";
          }


      }
  }


  $(document).ready(function() {
      $(document).snowfall({
          flakeCount: 150, // number
          flakeColor: '#006400', // string
          flakeIndex: 999999, // number
          minSize: 1, // number
          maxSize: 3, // number
          minSpeed: 2, // number
          maxSpeed: 10, // number
          round: true, // bool
          shadow: false // bool
      });
  });