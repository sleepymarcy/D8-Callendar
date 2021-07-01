/* LETS MODEL OUR DATA
// WE WANT TO STRUCTURE OUR DATA SO THAT WE CAN HAVE:
1. collection of DAYS > use an OBJECT as if it were a DICTIONARTY (by using key-value pairs like "day id" - "meetings the day")
2. collection of MEETINGS for EACH DAY > every day should offer the entire list of meetings that take place on that day > we use an ARRAY for that
3. each meeting in the collection should provide details like TIME and DESCRIPTION of the meeting itself > we use an object


// EXAMPLES OF HOW WE WOULD LIKE TO STRUCTURE OUR DATA

// This is how we would like to store the meeting data for a single day
let meetingsForADay = [ { time: "09:00", description: "Live lecture"}, { time: "15:00", description: "Recap session"} ]

// How can we track them all?

// >> This alternative uses an array - works, but can have some issues in the long run
let meetingDataUsingAnArray = [
    [ { time: "09:00", description: "Live lecture"}, { time: "15:00", description: "Recap session"} ],
    [ { time: "13:00", description: "Lunch break"} ],
    [],
    [],
    [ { time: "17:00", description: "Dentist"} ]
]

// >> This alternative uses an object as a "Dictionary" (key-value pair collection): works better
// - no need to specify "empty" days
// - better support for multiple months/years
let meetingData = {
    "2021-07-01": [ { time: "09:00", description: "Live lecture"}, { time: "15:00", description: "Recap session"} ],
    "2021-07-02": [ { time: "13:00", description: "Lunch break"} ],
    "2021-07-05": [ { time: "17:00", description: "Dentist"} ]
}
*/


window.onload = function(){
    displayEntireMonth()
}

const displayEntireMonth = function() {
     // TODO: getting the actual current month
    // for now we just assume we're in July and there are 31 days

    // We get the month container
    let monthContainerNode = document.getElementById("month-container")

    for(let dayNumber = 1; dayNumber <= 31; dayNumber++) {

        // let's create a new day
        // (for now, this will only live in memory)

        // Let's create a new day: <div class="day">1</div>
        // (for now, this will only live in memory)
        let newDayNode = document.createElement("div") // <div></div>
        newDayNode.innerText = dayNumber // <div>1</div>
        newDayNode.classList.add("day") // <div class="day">1</div>
        newDayNode.onclick = selectDay

        // Append the newly created day as the last child of the month container DIV
        // (from now on, it will appear on the page as well)
        monthContainerNode.appendChild(newDayNode)
    }
}

const selectDay = function(event){
    // DESELECT THE CURRENTLY SELECTED DAY
    const currentlySelectedDayNode = document.querySelector(".selected") // Looking for any "selected" day in the page
    if (currentlySelectedDayNode !== null) { // If there is any selected day...
        currentlySelectedDayNode.classList.remove("selected") // ...we remove the "selected" class from it
    }

    // SELECT DAY THAT HAS JUST BEEN CLICKED
    const clickedDayNode = event.currentTarget  // This give us the HTML element that has been clicked
    clickedDayNode.classList.add("selected")    // We apply "selected" class to it
}
const createMeeting = function() {
    
    // WE HAVE TO READ USER INPUTS
    const meetingTime = document.getElementById("meeting-time").value
    const meetingDescription = document.getElementById("meeting-description").value

    // WE CREATE A NEW HTML ELEMENT ON THE PAGE TO SHOW IT
    const newMeetingListItemNode = document.createElement("li")
    newMeetingListItemNode.innerText = `${meetingTime} - ${meetingDescription}`

    // WE APPEND THE NEWLY CREATED LI ELEMENT AS THE LAST CHILD OF THE MEETINGS LIST
    const meetingsListNode = document.getElementById("meetings-for-the-day")
    meetingsListNode.appendChild(newMeetingListItemNode)
}
const getCurrentlySelectedDay = function(){
    return document.querySelector(".selected")
}

const getSelectedDayMeetings = function(){

    // CHECK WHICH ONE IS THE SELECTED DAY
    let currentlySelectedDayNode = getCurrentlySelectedDay()

    // If no day is currently selected..
    if (currentlySelectedDayNode === null){
        return null // ..we simply exit this function
    }

    // We use the day number as the "ID", the "key" for accessing the dictionary
    const selectedDayId = currentlySelectedDayNode.innerText

    // We get the array with all the meetings for that specific day
    let meetingsForTheDayArray = meetingData[selectedDayId]

    // If no data is present for that day yet...
    if (meetingsForTheDayArray === undefined){
        meetingsForTheDayArray = []
        meetingData[selectedDayId] = meetingsForTheDayArray
    }

    return meetingsForTheDayArray
}
