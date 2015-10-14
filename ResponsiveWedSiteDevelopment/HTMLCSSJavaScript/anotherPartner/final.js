// Do not run javascript until the document is ready
$(document).ready(function(){

  // These variables allow the well to be interactively updated depending upon which weather button was chosen.
  var HTMLtodosStart = '<h3 id="todos-h3">Bears TODO List at a Glance:</h3><ul id="todos" class="flex-box list-unstyled"></ul>';
  var HTMLtodos = '<li class="flex-item todo-item list-unstyled"><span><h4>%data%</h4></span></li>';
  var formattedTodo;

  // This object contains the todo items for the different types of weather. This information is used to fill the well
  var wb = {
    sunny: ["<h2>Surfs Up. Time to head to the beach.</h2>",
            "Throw flip-flops, sunglasses, sunblock into a beach bag.",
            "Put on swim-suit and grab a couple of beach towels.",
            "Turn off cell-phone - no calls today",
            "Pack beach balls, umbrella, and cooler."],
    partlysunny: ["<h2>Back To Work Front End Development projects.</h2>",
                "Get user requirements",
                "Create project folders",
                "Mock up webpage",
                "Repeat."],
    cloudy: ["<h2>Hope of Moisture</h2>",
            "Get new windshield wipers",
            "Replace broken umbrella",
            "Pray for Rain",
            "Perform Rain Dance"],
    rainy: ["<h2>Thank you El Nino!</h2>",
        "It's raining. It's pouring. The old bear is snoring.",
        "Skylights are leaking!",
        "Put buckets under the leaking skylights",
        "Electric wires down, no electricity",
        "Bears hunker down and study CSS3/HTML5, JS, and jQuery by candlelight!"],
    thunderstorm: ["<h2>Time to Hide</h2>",
                   "Find a flashlight.",
                   "Brew a hot chai tea.",
                   "Grab a copy of 'Eloquent JavaScript'",
                   "Hide under the covers and read"],
    snowy: ["<h2>Ski Vacation</h2>",
                   "Get a Lift Ticket.",
                   "Ski.......",
                   "Warm up some hot chocolate",
                   "Read 'HTML5/CCS3 Tricks and Tips' by the fireplace"],
    night: ["<h2>Bed Time for Bears</h2>",
            "Brush teeth.",
            "Bathe.",
            "Put on BearJamas.",
            "BedTime Story: JQuery for Smarties."]
  };

  // Clicking on the bear images results in alerts. Use a different alert for each image
  $("#bears1").click(function(){
    alert("What was that?");
  });

  $("#bears2").click(function(){
      alert("Hey that hurt, how would you like to be clicked on?");
      $(this).stop();
  });

  $("#bears3").click(function(){
      alert("Grr. I thought I told you to not to click.");
  });

  // Sunny Bears Button was clicked
  $("#sunny").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "1.0");
    $("#tagline").css({
                    "color": "yellow",
                    "font-size": "300%",
                    "text-shadow": "2px 2px orange",
                    "margin-bottom": "20px"
                    });

    $("#tagline").append("Sunny skies are here today. Little Bears Want to Play!");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.sunny.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.sunny[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Partly Suuny Bears Button was clicked
  $("#partlysunny").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.8");
    $("#tagline").css({
                    "color": "#FFFF33",
                    "font-size": "300%",
                    "text-shadow": "2px 2px LightSkyBlue",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("Scattered Clouds. Back to Work");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.partlysunny.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.partlysunny[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Cloudy Bears Button was clicked
  $("#cloudy").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.5");
    $("#tagline").css({
                    "color": "gray",
                    "font-size": "300%",
                    "text-shadow": "2px 2px LightSteelBlue",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("Clouds. Pray for Rain.");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.cloudy.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.cloudy[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Rainy Bears Button was clicked
  $("#rainy").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.3");
    $("#tagline").css({
                    "color": "DarkSlateGray",
                    "font-size": "300%",
                    "text-shadow": "2px 2px LightSlateGray",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("Rain. Hurray. End the Drought!");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.rainy.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.rainy[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Scared Bears Button was clicked
  $("#thunderstorm").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.2");
    $("#tagline").css({
                    "color": "Gray",
                    "font-size": "300%",
                    "text-shadow": "2px 2px SlateGray",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("T-Storms. Head for Shelter");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.thunderstorm.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.thunderstorm[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Snowy Bears Button was clicked
  $("#snowy").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.8");
    $("#tagline").css({
                    "color": "white",
                    "font-size": "300%",
                    "text-shadow": "2px 2px SteelBlue",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("Brrr. Snowy Snowy Day");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.snowy.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.snowy[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Sleepy Bears Button was clicked
  $("#night").click(function(){
    $("#tagline").empty();
    $("#well").empty();
    $("img").css("opacity", "0.1");
    $("#tagline").css({
                    "color": "#FFFF33",
                    "font-size": "300%",
                    "text-shadow": "2px 2px LightSkyBlue",
                    "margin-bottom": "20px"
                    });
    $("#tagline").append("Bed Time for Bears");
    $("#well").append(HTMLtodosStart);
    for (var i = 0; i < wb.night.length; i++) {
      formattedTodo = HTMLtodos.replace("%data%", wb.night[i]);
      $("#well:last").append(formattedTodo);
    };
  });

  // Enable the tool tips for the Weather Buttons
  $('[data-toggle="tooltip"]').tooltip();

});
