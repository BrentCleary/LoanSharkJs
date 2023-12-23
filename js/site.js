// Get Values
function getValues()
{
  // Get Form input values
  let balance = document.getElementById("balance").value;
  let term = document.getElementById("term").value;
  let rate = document.getElementById("rate").value;

  let returnObj = calculatePayments(balance, term, rate);

  displayPaymentInfo(returnObj);
}


// Calculate Interest Rate Payments
function calculatePayments(balance, term, rate)
{
  // calulate payments here
  let returnObj = {};

  returnObj.balance = balance;
  returnObj.term = term;
  returnObj.rate = rate;


  returnObj.principal = balance;

  returnObj.interest = (rate/1200);
  returnObj.monthlyPayment = ((balance * returnObj.interest) / (1 - Math.pow(1 + returnObj.interest, -term))).toFixed(2);

  returnObj.totalPayment = (returnObj.monthlyPayment * term).toFixed(2);
  returnObj.totalInterest = (returnObj.totalPayment - returnObj.principal).toFixed(2);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
  }




  return returnObj;
}

// Display Payment Info
function displayPaymentInfo(returnObj)
{
  // Display Field on side panel
  document.getElementById("monthlyPayment").innerHTML = `$${returnObj.monthlyPayment}`;
  document.getElementById("principalTotal").innerHTML = `$${returnObj.principal}`;
  document.getElementById("interestTotal").innerHTML = `$${returnObj.totalInterest}`;
  document.getElementById("costTotal").innerHTML = `$${returnObj.totalPayment}`;


  // Display Table
  // get the table body element from the page
  let tableBody = document.getElementById("tableDisplay");
  // get the template cell
  let templateRow = document.getElementById("loanTemplate");

  // clear table first
  tableBody.innerHTML = "";

  // create and instance of the row for every month of the term
  for (let i = 1; i <= returnObj.term; i++)
  {
    // import that table row template
    let tableRow = document.importNode(templateRow.content, true);
    
    // grab just the <td> to put into an array
    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].textContent = i;
    rowCols[1].textContent = returnObj.monthlyPayment;
    rowCols[2].textContent = returnObj.monthlyPayment - returnObj.interest;
    rowCols[3].textContent = 0;
    rowCols[4].textContent = 0;
    rowCols[5].textContent = 0;

    tableBody.appendChild(tableRow);
  }

}
