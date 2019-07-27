console.log('running JS');

$(document).ready(readySubmit);
// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.Using the stored information, calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.

let totalSalary = 0;
let monthlySalary = 0;

function readySubmit() {
    // when button is clicked, things happen as commented above
    $('#submitBtn').on('click', collectInfo);
    $('#tableBody').on('click', '#delBtn', removeInfo);
}

function collectInfo() {
    console.log('Submit button works');
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let idNum = $('#idNum').val();
    let jTitle = $('#jTitle').val();
    let aSalary = $('#aSalary').val();
    totalSalary += +(aSalary);
    $('#tableBody').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>#${idNum}</td><td>${jTitle}</td><td id="aSalaryText">${aSalary}</td><td><button id="delBtn">Delete</button><td></tr>`);
    $('#fName').val('');
    $('#lName').val('');
    $('#idNum').val('');
    $('#jTitle').val('');
    $('#aSalary').val('');
    monthlySal();
}

//calculate monthly salary cost, append it to the DOM, and flag red if over $20k
function monthlySal() {
    monthlySalary = parseInt(totalSalary/12);
    $('#monthlyCost').text('$' + monthlySalary);
    if(monthlySalary > 20000){
        $('#monthlyCost').addClass('overBudget');
    }
}

// a delete button that removes an employee from the DOM and updates the monthly salary cost. 
function removeInfo() {
    let removedSalary = $(this).parent().parent().children('#aSalaryText').text();
    console.log('Employee removed from database.');
    console.log(removedSalary);
    $(this).parent().parent().remove();
    totalSalary -= +(removedSalary);
    monthlySalary = parseInt(totalSalary / 12);
    $('#monthlyCost').text('$' + monthlySalary);
    if (monthlySalary <= 20000) {
        $('#monthlyCost').removeClass('overBudget');
    }
}