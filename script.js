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


    // put formatted date at top of page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
    // initializes realHour to null so it is global and can be checked against previous values in the slotUpdate function
    var realHour = null;

    // run slotUpdate once as part of the initialization so the program doesn't wait 1 second for the timerInterval to start
    slotUpdate();

    // update past, present, future every second
    var timerInterval = setInterval(slotUpdate, 1000);

    function slotUpdate() {

        // checks if the hour has changed
        if (realHour !== moment().hour()){
            // if changed sets realHour to the current hour
            realHour = moment().hour();
            hour = realHour - 9;
            // loops through rows
            for(i = 0; i < 9; i++){
                // set all rows with id > hour to future
                if (i > hour){
                    $("#" + i).addClass("future");
                }
                // all rows with id < hour to past
                else if (i < hour){
                    $("#" + i).removeClass("present");
                    $("#" + i).addClass("past");

                }
                // all rows with id = hour to present
                else {
                    $("#" + i).removeClass("future");
                    $("#" + i).addClass("present");
                }
            }
        }
    }

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