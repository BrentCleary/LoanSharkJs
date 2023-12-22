// Get Values
function getValues()
{
  // Get Form input values
  loanAmt = document.getElementById("loanAmount").value;
  paymentAmt = document.getElementById("payment").value;
  interestRate = document.getElementById("rate").value;

  paymentResults = calculatePayments(loanAmt, paymentAmt, interestRate);

  displayPaymentInfo(paymentResults);
}

// Calculate Interest Rate Payments
function calculatePayments(loanAmt, paymentAmt, interestRate)
{
  // calulate payments here
  

}

// Display Payment Info
function displayPaymentInfo(paymentResults)
{
  // write display template info here
}