export const fetchData = (apiUrl) => {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}