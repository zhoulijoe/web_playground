const TAX_RATE = 0.09;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 15.99;

var accountBalance = prompt('Please enter your bank account balance');

function calculateTotalPrice() {
    var phones = 0;
    var totalPrice = 0;

    while(true) {
        var nextPricePoint = totalPrice + ((PHONE_PRICE + ACCESSORY_PRICE) * (1 + TAX_RATE));
        if (nextPricePoint <= accountBalance) {
            phones++;
            totalPrice = nextPricePoint;
        } else {
            return {
                phones: phones,
                price: totalPrice
            };
        }
    }
}

function formatPrice(price) {
    return '$' + price.toFixed(2);
}

var totalPrice = calculateTotalPrice();

console.log('You can buy ' + totalPrice.phones + ' phones for a total price of ' + formatPrice(totalPrice.price));
