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
