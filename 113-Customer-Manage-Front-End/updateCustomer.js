function updateCustomer() {
      let id = document.getElementById("txtUpdateCustomerId").value;
      let name = document.getElementById("txtUpdateName").value;
      let address = document.getElementById("txtUpdateAddress").value;
      let salary = document.getElementById("txtUpdateSalary").value;

      alert("update customer successful!");
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": id,
  "name": name,
  "address": address,
  "salary": salary
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/customer/update-customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}




// function updateCustomer() {
//   let id = document.getElementById("txtUpdateCustomerId").value;
//   let name = document.getElementById("txtUpdateName").value;
//   let address = document.getElementById("txtUpdateAddress").value;
//   let salary = document.getElementById("txtUpdateSalary").value;

//   if (!id || !name || !address || !salary) {
//       alert("Please fill in all fields.");
//       return;
//   }

//   alert(`Customer Updated!\nID: ${id}\nNew Name: ${name}\nNew Address: ${address}\nNew Salary: ${salary}`);

//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   const raw = JSON.stringify({
//       "id": id,
//       "name": name,
//       "address": address,
//       "salary": salary
//   });

//   const requestOptions = {
//       method: "PUT",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//   };

//   fetch(`http://localhost:8080/customer/update-${customer}`, requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//           console.log(result);
//           alert("Customer updated successfully!");
//       })
//       .catch((error) => {
//           console.error(error);
//           alert("Failed to update customer.");
//       });
// }