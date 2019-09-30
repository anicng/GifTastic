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
            $("#search-input").val("");
        })

        // when animal button click, call api and display 10 gif with its rating

        function gifDisplay() {
            $(".gif-div").empty();
            var animalChosen = $(this).attr("value");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animalChosen + "&api_key=CI5BOuYtH2R5TZWlbUOCcWdPBiaMSZ5V&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                response.data.forEach(function (gifInput) {
                    var newDiv = $("<div>")
                    var newImage = $("<img>");
                    var p = $("<p>")
                    // var gifImage = this.images.original_still.url;
                    newImage.attr("src", gifInput.images.fixed_height.url);
                    p.text("Rating: " + gifInput.rating);

                    newDiv.append(newImage, p);
                    $(".gif-div").append(newDiv);

                })
            });
        };

        $(".animalButton").on("click", $(".gif-div").empty());

        $(document).on("click", ".animalButton", gifDisplay);

    });