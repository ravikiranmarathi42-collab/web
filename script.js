
const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!name || !email || !course) {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");

    [name, email, course].forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    studentList.appendChild(row);

    form.reset();
});
