const allTicketsTag = document.querySelectorAll("#allSeatContainer p");
const existedTicketsNumTag = document.getElementById("existedSeatsTag");
console.log(existedTicketsNumTag.innerText);
const selectedSeatsTag = document.getElementById("selectedSeatNumTag");
const ticketsContainer = document.getElementById("ticketsContainer");
const totalPriceTag = document.getElementById("totalPriceTag");
const grandtotalTag = document.getElementById("grandTotalTag");


// make text into Num
function textIntoNum(input) {
  const num = parseInt(input);
  return num;
}

// Create a ticket inside the ticketsContainer Tag
function createTicket(ticketInfo) {

  const div = document.createElement("div");
  div.setAttribute("class", "flex items-center justify-between text-lg mt-2");
  div.innerHTML = `<p>${ticketInfo}</p> <p>Economy</p> <p>550</p>`;
  ticketsContainer.appendChild(div);
  // delete the "No-Ticket-Alert" Message
  document.getElementById("ticketMsgTag").style.display = "none";

}

// set "total price" and "grand-total price"
function setThePrices(money) {
  const totalAmount = textIntoNum(money) + 550;
  totalPriceTag.innerText = totalAmount;
  grandtotalTag.innerText = totalAmount;
}

// Prevent ticket being added
function showToastMsg(text) {
  // getting a Toast msg from "Toastify-js"
  Toastify({
    text: text,
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

//  When click to Book a Ticket

let selectedSeats = [];

allTicketsTag.forEach((oneSpecificTicket) => {

  oneSpecificTicket.addEventListener("click", () => {

    // prevent adding Ticket if it's already booked
    if(selectedSeats.includes(oneSpecificTicket.innerText)){

             showToastMsg('Already-Booked');
             return;
    }else{
        selectedSeats.push(oneSpecificTicket.innerText);
    }

    // Prevent adding Ticket if Already 4 taken
    if (selectedSeatsTag.innerText == "4") {
      showToastMsg("Not Allowed More than 4 Tickets");
      return;
    }

    // making color the Ticket Tag
    oneSpecificTicket.setAttribute(
      "style",
      "background: #1DD100; color: white"
    );

    // reducing the existed tickets
    existedTicketsNumTag.innerText =
      textIntoNum(existedTicketsNumTag.textContent) - 1;

    // increasing selected seats Num
    selectedSeatsTag.innerText = textIntoNum(selectedSeatsTag.textContent) + 1;

    // adding ticket info and deleting the ticket message by a function
    createTicket(oneSpecificTicket.innerText);

    // Setting the value of "total price" and the "grand total price" together as well as pushing the seat name inside the Array above
    setThePrices(totalPriceTag.textContent);
    selectedSeats.push(oneSpecificTicket);
  });
});

// Hide the "discount-field" and make visible the "discounted-money" Amount.
function hideAndShowTag(discountedMoney) {
    
    // Make visible the hidden discount-amount divTag
  document.getElementById("discountDiv").removeAttribute('style');
  document.getElementById("discountMoneyTag").innerText = discountedMoney;

    // Hide the coupon-text filed  
   document.getElementById('coupon-code-container').style.display = 'none';
}

// Coupon-part for reducing the money
document.getElementById("couponBtn").addEventListener("click", () => {
  // if there are 4 tickets
  if (selectedSeatsTag.innerText !== "4") {
    showToastMsg("Add 4 tickets to get discount");
  }

  //  coupon-code
  const couponCode = document.getElementById("coupon-code").value;
  if (couponCode == "NEW15") {

    grandtotalTag.innerText = (textIntoNum(totalPriceTag.innerText) / 100) * 85;
    hideAndShowTag((textIntoNum(totalPriceTag.innerText) / 100) * 15);
    
  } else if (couponCode == "couple 20") {

    grandtotalTag.innerText = (textIntoNum(totalPriceTag.innerText) / 100) * 80;
    hideAndShowTag((textIntoNum(totalPriceTag.innerText) / 100) * 20);

  } else {
    showToastMsg("Coupon is Invalid!");
  }
});
