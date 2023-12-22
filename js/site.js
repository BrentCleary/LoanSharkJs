// Get Values
function getValues()
{
  // Get Form input values
  let balance = document.getElementById("balance").value;
  let term = document.getElementById("term").value;
  let rate = document.getElementById("rate").value;

  let paymentObj = calculatePayments(balance, term, rate);

  displayPaymentInfo(paymentObj);
}


// Calculate Interest Rate Payments
function calculatePayments(balance, term, rate)
{
  // calulate payments here
  let returnObj = {};

  returnObj.balance = balance;
  returnObj.term = term;
  returnObj.rate = rate;

  returnObj.payment;


  for (let i = returnObj.balance; i >= 0; i - returnObj.payment)
  {
  
    

  // principal payment per month
  returnObj.principalPayment = balance / term; 
  // interest per month
  returnObj.monthlyInterest = balance * rate / 1200;
  // Total Interest
  returnObj.totalInterest = returnObj.monthlyInterest * term;
  // Total Payment
  returnObj.totalPayment = balance + returnObj.totalInterest;
  // total per month
  returnObj.totalMonthPayment = (balance * (rate / 1200)) / ((1 + rate/1200)^term)


    
  }


  return returnObj;
}

// Display Payment Info
function displayPaymentInfo(paymentObj)
{
  // get the table body element from the page
  let tableBody = document.getElementById("tableDisplay");

  // get the template cell
  let templateRow = document.getElementById("loanTemplate");

  // clear table first
  tableBody.innerHTML = "";

  for (let i = 0; i < term; i += 6)
  {
    let tableRow = document.importNode(templateRow.content, true);
    
    // grab just the <td> to put into an array
    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i+1]);
    rowCols[1].textContent = fbArray[i+1];
    
    rowCols[2].classList.add(fbArray[i+2]);
    rowCols[2].textContent = fbArray[i+2];
    
    rowCols[3].classList.add(fbArray[i+3]);
    rowCols[3].textContent = fbArray[i+3];
    
    rowCols[4].classList.add(fbArray[i+4]);
    rowCols[4].textContent = fbArray[i+4];

    tableBody.appendChild(tableRow);
  }

}
