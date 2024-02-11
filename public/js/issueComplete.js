var area = document.querySelector('#issues')
const issueCompletionHandler = async (event) => {
    event.preventDefault()
    console.log('woor')
    const element = event.target; 
    const id = element.value;
    
    issue_status = true;
    const response = await fetch('/api/issues/'+id, {
              
      method:'PUT',
      body: JSON.stringify({issue_status }),
  })
  
  
  if (response.ok) {
      alert('issue Complete');
    } else {
      alert('Failed.');
    }
  }
area.addEventListener('woor',issueCompletionHandler)