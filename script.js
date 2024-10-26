const updateCardDetails = () => {
    // Get values from input fields
    const newName = document.getElementById("inputName").value;
    const newHandler = document.getElementById("inputHandler").value;
    const newInstitution = document.getElementById("inputInstitution").value;
    const newAge = document.getElementById("inputAge").value;
    const newCourse = document.getElementById("inputCourse").value;
    const newYear = document.getElementById("inputYear").value;
    const newMotto = document.getElementById("inputMotto").value;
    const newId = document.getElementById("inputId").value;

    // Update the ID card details
    document.querySelector(".name").textContent = newName;
    document.querySelector(".handler").textContent = newHandler;
    document.querySelector(".institution").textContent = newInstitution;
    document.getElementById("age").textContent = newAge;
    document.getElementById("course").textContent = newCourse;
    document.getElementById("year").textContent = newYear;
    document.getElementById("motto").textContent = newMotto;
    document.getElementById("id").textContent = newId;

    alert("Card details updated!");
}

// Event listener for the button to update card details
document.getElementById("updateButton").addEventListener("click", updateCardDetails);
