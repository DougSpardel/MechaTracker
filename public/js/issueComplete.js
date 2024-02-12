//incomplete and not implemented yet.  Intended to update issues.
//selector for #issues id 
var area = document.querySelector('#issues')

const issueCompletionHandler = async (event) => {
    event.preventDefault()
    //trying to get issue id from element
    const element = event.target; 
    const id = element.value;
    
    issue_status = true;
    //attempt to put the id into the fetch url
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

  // eventListener for woor button does not exist
area.addEventListener('woor',issueCompletionHandler)