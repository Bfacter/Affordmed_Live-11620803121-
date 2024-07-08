document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let a = parseFloat(document.getElementById("mainBill").value);
  let b = parseFloat(document.getElementById("tip").value);

  let total = a + a * (b / 100);
  let c = document.getElementById("totalbill");
  c.innerText = `Total bill is ${total.toFixed(2)}`;
});
