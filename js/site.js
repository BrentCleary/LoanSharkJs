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
  let returnObj = {};

  // calulate payments here
  let principal = balance;
  let interest = (rate/1200);
  let monthlyPayment = ((balance * interest) / (1 - Math.pow(1 + interest, -term))).toFixed(2);
  let totalSum = (monthlyPayment * term).toFixed(2);
  let interestTotal = (totalSum - principal).toFixed(2);

  returnObj.monthlyPayment = monthlyPayment;
  returnObj.principal = principal;
  returnObj.totalSum = totalSum;
  returnObj.interestTotal = interestTotal;

  let principalPayment = 0;
  let interestSum= 0;
  let interestPayment = 0;

  let paymentArray = [];

  for (let i = 1; i <= term; i++)
  {
    // Calculate values for monthly payments
    interestPayment = (principal * interest).toFixed(2);
    principalPayment = (monthlyPayment - interestPayment).toFixed(2);
    interestSum = (interestSum + parseFloat(interestPayment));
    principal = (principal - principalPayment).toFixed(2);
    
    // Push values into paymentArray for looping over in display tables
    paymentArray.push([
      i, 
      parseFloat(monthlyPayment).toFixed(2), 
      parseFloat(principalPayment).toFixed(2), 
      parseFloat(interestPayment).toFixed(2), 
      interestSum.toFixed(2), 
      parseFloat(principal).toFixed(2)
    ]);
  }

  returnObj.paymentArray = paymentArray;

  return returnObj;
}

// Display Payment Info
function displayPaymentInfo(returnObj)
{
  // Display Field on side panel
  document.getElementById("monthlyPayment").innerHTML = `$${returnObj.monthlyPayment}`;
  document.getElementById("principalTotal").innerHTML = `$${returnObj.principal}`;
  document.getElementById("interestTotal").innerHTML = `$${returnObj.interestTotal}`;
  document.getElementById("costTotal").innerHTML = `$${returnObj.totalSum}`;

  // Display Table
  // get the table body element from the page
  let tableBody = document.getElementById("tableDisplay");
  // get the template cell
  let templateRow = document.getElementById("loanTemplate");
  // clear table first
  tableBody.innerHTML = "";

  // create and instance of the row for every month of the term
  for (let i = 0; i < returnObj.paymentArray.length ; i++)
  {
    // import that table row template
    let tableRow = document.importNode(templateRow.content, true);
    // grab just the <td> to put into an array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].textContent = returnObj.paymentArray[i][0];
    rowCols[1].textContent = returnObj.paymentArray[i][1];
    rowCols[2].textContent = returnObj.paymentArray[i][2];
    rowCols[3].textContent = returnObj.paymentArray[i][3];
    rowCols[4].textContent = returnObj.paymentArray[i][4];
    rowCols[5].textContent = returnObj.paymentArray[i][5];

    tableBody.appendChild(tableRow);
  }

}
