// Student Search

function searchStudent() {

let input =
document.getElementById("search").value.toLowerCase();

let rows =
document.querySelectorAll("table tbody tr");

rows.forEach(row => {

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(input) ? "" : "none";

});

}

// Welcome Message

window.onload = function() {

console.log("Hostel Management System Loaded");

};

// Food Order

function orderFood(item){

alert(item + " Ordered Successfully!");

}

// Payment

function paymentSuccess(){

alert("Payment Submitted Successfully!");

}

// Complaint

function complaintSuccess(){

alert("Complaint Submitted Successfully!");

}
