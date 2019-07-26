console.log('running JS');

$(document).ready(readySubmit);
// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.Using the stored information, calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.

function readySubmit() {
    // when button is clicked, things happen as commented above
    $('#submitBtn').on('click', collectInfo);
}

function collectInfo() {
    console.log('Submit button works');
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let idNum = $('#idNum').val();
    let jTitle = $('#jTitle').val();
    let aSalary = $('#aSalary').val();
    $('#tableBody').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${idNum}</td><td>${jTitle}</td><td>${aSalary}</td></tr>`);
}