// List of tasks

// Initialization
// Load from local storage
// write from local storage to page
// write current date at top
//      using moment.js
// style timeblocks based on past present future
//     using moment.js

// Buttons
// on button click save what is in the textarea to local storage
//      first save it to local object array then to local storage

// Dynamically update styling
// every hour update the timeblocks so that they are properly colorcoded based on the new hour
//      using moment.js




$(document).ready(function () {

    // empty array for storing event text
    var eventArray = ["","","","","","","","",""];

    // localStorage.setItem("events", JSON.stringify(eventArray));

    // if something in local storage load from local storage
    if (localStorage.getItem("events") !== null) {
        // load from local storage
        eventArray = JSON.parse(localStorage.getItem("events"));
        // write from array to page
        for (i = 0; i < 9; i++){
            $("#" + i).find(".description").text(eventArray[i]);
        }
    }



    // when button is clicked
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();

        // go to its sibling element with class of description and copy the text content to a temporary variable
        var tempText = $(this).siblings(".description").val();

        // save the text in that sibling to eventArray in the index equal to the id of the parent element
        eventArray[$(this).parent().attr("id")] = tempText;

        // save eventArray in local storage
        localStorage.setItem("events", JSON.stringify(eventArray));


    });

});