// Write your solution in this file!

var customerName = 'John';
function upperCaseCustomerName() {
  if (customerName) {
    return customerName.toUpperCase();
  } else {
    return 'Customer name not defined';
  }
}

function setBestCustomer() {
  BestCustomer = 'not bob';
}
function overwriteBestCustomer() {
  BestCustomer = 'still not bob'; 
}

const leastFavoriteCustomer = 'Alice';
function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'Bob';
}
