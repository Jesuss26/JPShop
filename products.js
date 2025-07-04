const products = [
  { id: 1, name: "เสื้อยืด", price: 199 },
  { id: 2, name: "รองเท้า", price: 899 }
];

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>ราคา: ${product.price} บาท</p>
    <button onclick="addToCart(${product.id})">ใส่ตะกร้า</button>
  `;
  container.appendChild(card);
});

function addToCart(id) {
  alert("เพิ่มสินค้ารหัส " + id + " ไปยังตะกร้าแล้ว!");
}
