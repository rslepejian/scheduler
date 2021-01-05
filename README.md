# Workday Scheduler

## Description
This application is a workday planner. It has textfields for entering plans for hours from 9AM to 5PM, and save buttons for each textfield that saves the entered plans in local storage. Upon reloading the page, what was stored in local storage will be loaded and displayed. This aplication also dynamically styles its rows to show where plans fall in relation to the present hour.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git]
* [Github](https://github.com/)
* [Javascript](https://www.javascript.com/)
* [Moment.js](https://momentjs.com/)

## Deployed Link

* [See Live Site](https://rslepejian.github.io/scheduler/)

## Preview of Working Site

![Image](/assets/preview.png)


## Code Snippet
This code snippet shows the process of checking every second for if the current hour has changed and if so restyling the page based on each timeblocks relation to the present. This code snippet was chosen because the crux of building this application was successfully integrating the moment.js API to find and format the current date and time.

```javascript
    // update past, present, future every second
    setInterval(slotUpdate, 1000);

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
                    $("#" + i).addClass("past");
                }
                // all rows with id = hour to present
                else {
                    $("#" + i).addClass("present");
                }
            }
        }
    }
```

## Authors

* **Raffi Lepejian** 

## Contact Information

- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/rslepejian)
- [Link to LinkedIn](https://linkedin.com/in/raffi-lepejian-071876153)