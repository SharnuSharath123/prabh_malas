document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;

    fetch(`/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            const detailsDiv = document.getElementById('userDetails');
            if (data.error) {
                detailsDiv.innerHTML = `<p>${data.error}</p>`;
            } else {
                detailsDiv.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Age:</strong> ${data.age}</p>
                `;
            }
        });
});
