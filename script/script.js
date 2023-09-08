

// Refactoring website with jQuery Project 12

// Menu bars icon, creating website more responsive
$(document).ready(function() {
  $('.toggle_btn').click(function() {
    $('.dropdown').toggleClass('open');
    const isOpen = $('.dropdown').hasClass('open ');
      $('.toggle_btn i').toggleClass(isOpen ? 'fa-xmark' : 'fa-bars');
  });

  // Slide-in JavaScript for home page principal item
  const observerOptions = {
    threshold: 0.5
  };

  const slideInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      } else {
        entry.target.classList.remove('slide-in');
      }
    });
  }, observerOptions);

  $('.principal').each(function() {
    slideInObserver.observe(this);
  });

  // Slide-in JavaScript for left items
  const slideInObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in1');
      } else {
        entry.target.classList.remove('slide-in1');
      }
    });
  }, observerOptions);

  $('.left').each(function() {
    slideInObserver1.observe(this);
  });

  // Slide-in JavaScript for right items
  const slideInObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in2');
      } else {
        entry.target.classList.remove('slide-in2');
      }
    });
  }, observerOptions);

  $('.right').each(function() {
    slideInObserver2.observe(this);
  });


  // Form validation and submission
  
$("#myWebsiteForm").on('submit', function(e){

  e.preventDefault();

});

$("#myWebsiteForm").validate({
  rules:{
    fname:{
      minlength: 2
    },
    lname:{
      minlength:2
    },
    email:{
      email:true
    },
    phone:{
      number:true,
      minlength:10,
      maxlength:10,
    },
    reason:{
      minlength:5
    },
  },
  messages:{
    fname:{
      required: "Please enter your First name",
      minlength: "Name should be at least 2 characters"
    },
    lname:{
      required: "Please enter your Last name",
      minlength: "Name should be at least 2 characters"
    },
    email:{
      required: "Please enter your email",
    },
    phone:{
      required: "Please enter your phone",
      minlength: "Phone should be 10 characters",
      maxlength: "Phone should be no more that 10 characters"
    },
    reason:{
      required: "Please enter a reason",
      minlength: "Reason should be at least 5 characters"
    },
  },

    submitHandler: function(form) {
      debug: true,
    form.submit();
    
  }
 });

});

function uservalue(){
  const uservalue = document.getElementById('list').value;
  console.log(uservalue);
  let myArr = String(uservalue).split(",").map((num)=>{
      return Number(num)
    })
    console.log(myArr)
  
  let list = document.getElementById("bubble-list");
        for (i = 0; i < myArr.length; ++i) {
            let li = document.createElement('li');
            li.innerText = myArr[i];
            list.appendChild(li);
        }
  }
   
function removeList(){
    $("#bubble-list li").remove();
    $("#sortList").show(500);
   }


function sortList() {
      //hide the start button
      $("#sortList").hide(500);

   //creat array of initial values
   var unSorted = $("#bubble-list li")
      .map(function() {
         return $(this).text();
      })
      .get();

   //show unsorted values in console
   console.log("Unsorted " + unSorted);

   //create new array with sorted values
   var sorted = unSorted.sort(function(a, b) {
      return a - b;
   });

   //show sorted values in console
   console.log("Sorted " + sorted);

   //loop with a setTimeOut delay
   var i = 0;

   function myLoop() {
      //get value of current item to remove
      let currentItemToRemove = sorted[i];
      //timed function so it doesn't happen all at once
      setTimeout(function() {
         // find an exact match otherwise any element containing the currentItemToRemove value will be targeted
         // add a class to add some basic css animation and fade it out then remove element
         $('#bubble-list li')
            .filter(function() {
               return $(this).text() === currentItemToRemove;
            })
            .addClass("pop-bubble")
            .fadeOut(1000, function() {
               $(this).remove();
            });
         // add new element to the end of the list with the currentItemToRemove value, add a class also
         $("#bubble-list").append(
            '<li class="sorted">' + currentItemToRemove + "</li>"
         );
         // fade in that new sorted list item, add a class for some css to hide it, then fade in
         $("li.sorted")
            .filter(function() {
               return $(this).text() === currentItemToRemove;
            })
            .fadeIn(1000);
         i++;
         if (i < sorted.length) {
            myLoop();
         }
      }, 1000);
   }

   myLoop();
}

       //Google map API
       var directionsService;
       var directionsRenderer;
       var geocoder;
       var map;
      //Initializing map
function initMap() {
           geocoder = new google.maps.Geocoder();
           directionsService = new google.maps.DirectionsService();
           directionsRenderer = new google.maps.DirectionsRenderer();
 const coordinates = { lat: 38.931211, lng: -100.241038 };
 
     map = new google.maps.Map(document.getElementById("map"), {
   zoom: 4,
   center: coordinates,
   styles: [
                 { elementType: "geometry", stylers: [{ color: "#000000" }] },
                 { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
                 { elementType: "labels.text.fill", stylers: [{ color: "#9BA4B5" }] },
                 {
                   featureType: "administrative.locality",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#9BA4B5" }],
                 },
                 {
                   featureType: "poi",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#d59563" }],
                 },
                 {
                   featureType: "poi.park",
                   elementType: "geometry",
                   stylers: [{ color: "#263c3f" }],
                 },
                 {
                   featureType: "poi.park",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#6b9a76" }],
                 },
                 {
                   featureType: "road",
                   elementType: "geometry",
                   stylers: [{ color: "#2B3A55" }],
                 },
                 {
                   featureType: "road",
                   elementType: "geometry.stroke",
                   stylers: [{ color: "#212a37" }],
                 },
                 {
                   featureType: "road",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#9ca5b3" }],
                 },
                 {
                   featureType: "road.highway",
                   elementType: "geometry",
                   stylers: [{ color: "#746855" }],
                 },
                 {
                   featureType: "road.highway",
                   elementType: "geometry.stroke",
                   stylers: [{ color: "#1f2835" }],
                 },
                 {
                   featureType: "road.highway",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#f3d19c" }],
                 },
                 {
                   featureType: "transit",
                   elementType: "geometry",
                   stylers: [{ color: "#2f3948" }],
                 },
                 {
                   featureType: "transit.station",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#d59563" }],
                 },
                 {
                   featureType: "water",
                   elementType: "geometry",
                   stylers: [{ color: "#445069" }],
                 },
                 {
                   featureType: "water",
                   elementType: "labels.text.fill",
                   stylers: [{ color: "#515c6d" }],
                 },
                 {
                   featureType: "water",
                   elementType: "labels.text.stroke",
                   stylers: [{ color: "##17263c" }],
                 },
               ],
 });
 directionsRenderer.setMap(map);
 // Set LatLng and title text for the markers. 
 //Set Airplane icon
 var markerIcon = {
 url: "https://cdn.icon-icons.com/icons2/1448/PNG/512/42586airplane_98957.png",
scaledSize: new google.maps.Size(40, 40), // Adjust the size of the icon
};
 
 const airports = [
   [{ lat: 27.993079, lng: -82.034462 }, "KLAL Amazon Air"],
   [{ lat: 25.790761, lng: -80.296872 }, "KMIA Amazon Air"],
   [{ lat: 30.626893, lng: -88.068105 }, "KBFM Amazon Air"],
   [{ lat: 64.816164, lng: -147.863646 }, "PAFA Amazon Air"],
   [{ lat: 61.174167, lng: -149.998333 }, "PANC Amazon Air"],
   [{ lat: 33.434167, lng: -112.011667 }, "KPHX Amazon Air"],
   [{ lat: 37.894167, lng: -121.238333 }, "KSCK Amazon Air"],
   [{ lat: 37.618889, lng: -122.375 }, "KSFO Amazon Air"],
   [{ lat: 34.095278, lng: -117.235 }, "KSBD Amazon Air"],
   [{ lat: 41.939167, lng: -72.683333 }, "KBDL Amazon Air"],
   [{ lat: 40.496, lng: -80.246 }, "KPIT Amazon Air"],
   [{ lat: 29.984444, lng: -95.341389 }, "KIAH Amazon Air"],
   [{ lat: 37.505, lng: -77.319444 }, "KRIC Amazon Air"],
   [{ lat: 47.448889, lng: -122.309444 }, "KSEA Amazon Air"],
   [{ lat: 40.652333, lng: -75.440472 }, "KABE Amazon Air"],
   [{ lat: 36.126667, lng: -86.681944 }, "KBNA Amazon Air"],
   [{ lat: 41.586806, lng: -83.807833 }, "KTOL Amazon Air"],
   [{ lat: 39.2975, lng: -94.713889 }, "KMCI Amazon Air"],
   [{ lat: 39.048889, lng: -84.667778 }, "KCVG Amazon Air"],
   [{ lat: 41.3, lng: -95.895 }, "KOMA Amazon Air"],
   [{ lat: 43.564444, lng: -116.222778 }, "KBOI Amazon Air"],
   [{ lat: 27.979722, lng: -82.534722 }, "KTPA Amazon Air"],
   [{ lat: 33.636667, lng: -84.428056 }, "KATL Amazon Air"],
   [{ lat: 39.861667, lng: -104.673056 }, "KDEN Amazon Air"],
   [{ lat: 35.039333, lng: -106.610778 }, "KABQ Amazon Air"],
   [{ lat: 30.194444, lng: -97.67 }, "KAUS Amazon Air"],
   [{ lat: 44.881944, lng: -93.221667 }, "KMSP Amazon Air"],
   [{ lat: 37.65, lng: -97.433056 }, "KICT Amazon Air"],
 ];
 // Create an info window to share between markers.
 const infoWindow = new google.maps.InfoWindow();

 // Create the markers.
 airports.forEach(([position, title], i) => {
   const marker = new google.maps.Marker({
     position,
     map,
     title: `${i + 1}. ${title}`,
     icon: markerIcon,
     optimized: false,
   });

   // Add a click listener for each marker, and set up the info window.
   marker.addListener("click", () => {
     infoWindow.close();
     infoWindow.setContent(marker.getTitle());
     infoWindow.open(marker.getMap(), marker);
   });
 });
}
function calcRoute() {
           var start = document.getElementById('origin').value;
           var end = document.getElementById('destination').value;
           var request = {
               origin: start,
               destination: end,
               travelMode: 'DRIVING'
           };
           directionsService.route(request, function (result, status) {
               if (status == 'OK') {
                   directionsRenderer.setDirections(result);
               } else { alert("An unexpected error occurred")}
           });
       }
           
           function getCoordinates() {
           var address = document.getElementById('address').value;
           geocoder.geocode({ 'address': address }, function (results, status) {
               if (status == 'OK') {
                   map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                       map: map,
                       position: results[0].geometry.location
                   });
               } else {
                   alert('Geocode was not successful for the following reason: ' + status);
               }
           });
       }

window.initMap = initMap;