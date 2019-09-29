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
            var animalChosen = $(this).attr("value");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animalChosen + "&api_key=CI5BOuYtH2R5TZWlbUOCcWdPBiaMSZ5V&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                response.data.forEach(function (gifInput) {
                    
                    var newImage = $("<img>");
                    // var gifImage = this.images.original_still.url;
                    console.log(gifInput.images.fixed_height.url);
                    newImage.attr("src", gifInput.images.fixed_height.url);
                    $(".gif-div").append(newImage);
                })



            });

        })



    });