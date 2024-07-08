let f = document
  .getElementById("form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let a = document.getElementById("mainBill").value;
    let b = document.getElementById("tip").value;

    let total = a + a * (b / 100);
    let c = document.getElementById("totalbill");
    c.innerHTML = `Total bill is ${total}`;
  });
