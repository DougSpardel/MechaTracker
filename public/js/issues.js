const issueCreationHandler = async (event) => {
    event.preventDefault();

    const vehicle_number = document.querySelector('#vehicleInput').value.trim();
    const description = document.querySelector('#descriptionInput').value.trim();
    const issue_status = false;
    console.log(vehicle_number,description)
    if (vehicle_number && description) {
        const response = await fetch('/api/issues', {
            
            method:'POST',
            body: JSON.stringify({ vehicle_number, description, issue_status }),
            headers: {'Content-type': 'application/json'}
        })

        console.log('what')
        if (response.ok) {
            alert('issue submitted');
          } else {
            alert('Failed.');
          }
    }
}

document.addEventListener('submit', issueCreationHandler)