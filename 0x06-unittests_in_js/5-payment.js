export default function sendPaymentRequestToAPI(totalAmount, shipping) {
  const total = totalAmount + shipping;
  console.log(`The total is: ${total}`);
}
