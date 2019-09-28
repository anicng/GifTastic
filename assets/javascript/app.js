$(document).ready(
    function gifGenerater() {
        var animalList = ["penguin", "cat", "dog", "bird", "tuna", "kangaroo", "panda"];

        function buttonGenerator() {
            $(".buttons-div").empty();
            animalList.forEach(function (animal) {
                var newButtons = $("<button type='button' class='btn btn-outline-info mr-2 animalButton'>");
                newButtons.text(animal);
                $(".buttons-div").append(newButtons);

            })
        };
        buttonGenerator();

        $("#submit-button").on("click", function (e) {
            e.preventDefault();
            var searchTerm = $("#search-input").val().trim();
            console.log(searchTerm);
            animalList.push(searchTerm);
            buttonGenerator();
        })





    });