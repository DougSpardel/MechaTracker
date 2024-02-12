//Creates Issue from issue view
const issueCreationHandler = async (event) => {
    event.preventDefault();

//querys for user input
    const vehicle_number = document.querySelector('#vehicleInput').value.trim();
    const description = document.querySelector('#descriptionInput').value.trim();

//const issue_status false upon creation
    const issue_status = false;
    
    if (vehicle_number && description) {
        const response = await fetch('/api/issues', {
            
            method:'POST',
            body: JSON.stringify({ vehicle_number, description, issue_status }),
            headers: {'Content-type': 'application/json'}
        })

//want to make element for submission and failure not just alert
        if (response.ok) {
            alert('issue submitted');
          } else {
            alert('Failed.');
          }
    }
}

//event listener for submit button
document.addEventListener('submit', issueCreationHandler)
