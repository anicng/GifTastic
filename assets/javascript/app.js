$(document).ready(
    function gifGenerater() {
        var animalList = ["penguin", "cat", "dog", "bird", "tuna", "kangaroo", "panda"];

        // render buttons with animals from animalList 
        function buttonGenerator() {
            $(".buttons-div").empty();
            animalList.forEach(function (animal) {
                var newButtons = $("<button type='button' class='btn btn-outline-info mr-2 animalButton'>");
                newButtons.attr("value", animal);
                newButtons.text(animal);
                $(".buttons-div").append(newButtons);

            })
        };

        buttonGenerator();

        // When submit button clicked, take search input and make it into a button with the input as value
        $("#submit-button").on("click", function (e) {
            e.preventDefault();
            var searchTerm = $("#search-input").val().trim();
            console.log(searchTerm);
            animalList.push(searchTerm);
            buttonGenerator();
        })

        // when animal button click, call api and display 10 gif with its rating
        $(".animalButton").on("click", function () {
            var animal = $(this).attr("value");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animal + "&api_key=CI5BOuYtH2R5TZWlbUOCcWdPBiaMSZ5V&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var gifImage = response.data.images.original_still;
                var newImage = $("<Image>");

                newImage.attr("scr", gifImage);
                $(".gif-div").append(newImage);

            });

        })



    });