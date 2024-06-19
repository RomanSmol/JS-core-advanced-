async function fetchUrls(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        }));
        const results = await Promise.all(fetchPromises);  
        return results;
    } 
    catch (error) {
        console.error("Error fetching URLs:", error);
        throw error;
    }   
}

const urls = [
    'https://learn.modsen.app/courses/8',
    'https://metanit.com/sharp/tutorial/',
    'https://www.jetbrains.com/ru-ru/rider/'
];

fetchUrls(urls)
    .then(contents => {
        console.log("Fetched contents:", contents);
    })
    .catch(error => {
        console.error("Error:", error);
    });
