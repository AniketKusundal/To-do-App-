window.onload = function() {
    // Get references to the input box and list container
    const InputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    // Function to add a task to the list
    function AddTask() {
        // Check if the input box is empty
        if (InputBox.value === '') {
            alert("You must write something");
        } else {
            // Create a new list item and set its content to the input box value
            let li = document.createElement('li');
            li.innerHTML = InputBox.value;
            listContainer.appendChild(li);

            // Create a span element with the '×' symbol and append it to the list item
            let span = document.createElement("span");
            span.innerHTML = '\u00d7'; // '×' symbol
            li.appendChild(span);
        }
        // Clear the input box after adding the task
        InputBox.value = "";
        SaveData();
    }

    // Set the button's onclick event to the AddTask function
    document.querySelector("button").onclick = AddTask;

    // Add an event listener to the list container for handling clicks
    listContainer.addEventListener("click", function(e) {
        // If a list item (LI) is clicked, toggle the 'checked' class
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            SaveData()
        } 
        // If the span element (×) is clicked, remove the parent list item
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            SaveData()
        }
    }, false);



    function SaveData() {
        localStorage.setItem("data" , listContainer.innerHTML)
    }


    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask(); 
};
