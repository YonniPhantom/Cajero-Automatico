function selectionFirstAccount() {
    let account = document.getElementById("account1");
    account.style.width = "400px";
    account.style.cursor = "auto"

    let second = document.getElementById("second1");
    second.style.display = "flex"
    second.style.width = "50%";

    let account2 = document.getElementById("account2");
    let account3 = document.getElementById("account3");

    let second2 = document.getElementById("second2");
    let second3 = document.getElementById("second3");

    account2.style.width = "150px"
    account2.style.cursor = "pointer"

    account3.style.width = "150px"
    account3.style.cursor = "pointer"

    second2.style.display = "none";
    second3.style.display = "none";

    document.querySelectorAll(".error").innerText = "";
}

function selectionSecondAccount() {
    let account = document.getElementById("account2");
    account.style.width = "400px";
    account.style.cursor = "auto"

    let second = document.getElementById("second2");
    second.style.display = "flex"
    second.style.width = "50%";

    let account2 = document.getElementById("account1");
    let account3 = document.getElementById("account3");

    let second2 = document.getElementById("second1");
    let second3 = document.getElementById("second3");

    account2.style.width = "150px"
    account2.style.cursor = "pointer"

    account3.style.width = "150px"
    account3.style.cursor = "pointer"

    second2.style.display = "none";
    second3.style.display = "none";

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

}

function selectionTirthAccount() {
    let account = document.getElementById("account3");
    account.style.width = "400px";
    account.style.cursor = "auto"

    let second = document.getElementById("second3");
    second.style.display = "flex"
    second.style.width = "50%";

    let account2 = document.getElementById("account1");
    let account3 = document.getElementById("account2");

    let second2 = document.getElementById("second1");
    let second3 = document.getElementById("second2");

    account2.style.width = "150px"
    account2.style.cursor = "pointer"

    account3.style.width = "150px"
    account3.style.cursor = "pointer"

    second2.style.display = "none";
    second3.style.display = "none";

    document.querySelectorAll(".error").innerText = "";

}