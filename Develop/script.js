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



    // 


    $(".saveBtn").on("click", function(event) {
        
    });

});