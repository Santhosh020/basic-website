document.getElementById("mySubmit").onclick = function() {
    // Declaring variables inside the function as they are used here
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    
    // Update the main heading
    document.getElementById("myH1").textContent = `Hello, ${username}!`;

    // Update the output message paragraph
    document.getElementById("outputmessage").textContent = `Your name is ${username} and you are ${age} years old.`;
}