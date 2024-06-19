const apiUrl = 'https://api.example.com/data';
const timeout = 5000;

async function fetchAndHandleData() {
    try {
        const data = await fetchDataWithTimeout(apiUrl, timeout);
        console.log('Data from API:', data);
    } 
    catch (error) {
        console.error('Error fetching or handling data:', error);
    }
}

fetchAndHandleData();