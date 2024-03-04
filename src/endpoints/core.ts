export const fetchData = (apiUrl: string) => {
  return fetch(apiUrl)
    .then((response: any) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .catch((error: any) => {
      console.error('Fetch error:', error);
    });
}