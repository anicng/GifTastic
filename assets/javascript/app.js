$(document).ready(
    function gifGenerater() {
        var animalList = ["penguin", "cat", "dog", "bird", "tuna", "kangaroo", "panda"];
        var searchInput = $("search-input");

        function buttonGenerator() {
            $(".buttons-div").empty();
            animalList.forEach(function (animal) {
                var newButtons = $("<button type='button' class='btn btn-outline-info'>");
                newButtons.text(animal);
                $(".buttons-div").append(newButtons);

            })
        };
        buttonGenerator();

        // $("#submit-button").on("click",function(){

        // })



    });