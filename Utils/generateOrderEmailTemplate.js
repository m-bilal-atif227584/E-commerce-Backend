export const generateOrderEmailTemplate = (ordered_items, name, email, order_id, total_amount, address, city, state, country, pincode, phone) => {
  const itemsHtml = ordered_items
    .map(
      (item) => `
      <li>
        <strong>${item?.product?.name}</strong> — ${item.quantity} x Rs. ${item?.product?.price} PKR
      </li>`
    )
    .join("");

  return `
    <h2>New Order Received</h2>
    <p><strong>Customer:</strong> ${name} (${email})</p>
    <p><strong>Order ID:</strong> ${order_id}</p>
    <p><strong>Total Amount:</strong> Rs. ${total_amount} PKR</p>
    <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${country} (${pincode})</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <br/>
    <h3>Ordered Items:</h3>
    <ul>${itemsHtml}</ul>
    <br/>
    <p>— ShopMate System</p>
  `;
};
