function addMatch() {
    let matchName = document.getElementById("matchName").value;
    let stagingTime = document.getElementById("stagingTime").value;

    if (matchName === "" || stagingTime === "") {
        alert("Please enter match name and staging time.");
        return;
    }

    let table = document.getElementById("matchList");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = matchName;
    cell2.innerHTML = stagingTime;

    document.getElementById("matchName").value = "";
    document.getElementById("stagingTime").value = "";
}
