function searchCustomer() {
    const id = document.getElementById("customerId").value;

    if (!id) {
        alert("Please enter a customer ID!");
        return;
    }

    fetch(`http://localhost:8080/customer/search-by-id/${id}`)
        .then(response => response.json())
        .then(data => {
            if (!data) {
                alert("Customer not found!");
                return;
            }

            let tableRow = `
            <caption>2025 Customers</caption>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Salary</th>
            </tr>
            `;

            let customerTable = document.getElementById("tblCustomers");

            if (Array.isArray(data)) {
                data.forEach(customer => {
                    tableRow += `    
                    <tr>
                        <td>${customer.id}</td>
                        <td>${customer.name}</td>
                        <td>${customer.address}</td>
                        <td>${customer.salary}</td>
                    </tr>
                    `;
                });
            } else {
                tableRow += `    
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.address}</td>
                    <td>${data.salary}</td>
                </tr>
                `;
            }

            customerTable.innerHTML = tableRow;
        })
        .catch(error => {
            console.error(error);
            alert("An error occurred while searching for the customer.");
        });
}
