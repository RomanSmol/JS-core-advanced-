async function fetchDataAndUseIt() {
    try {
        const response1 = await fetch('https://first-server.example.com/data');
        if (!response1.ok) throw new Error(`HTTP error! status: ${response1.status}`);
        const data1 = await response1.json();

        const response2 = await fetch('https://second-server.example.com/use-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data1)
        });
        if (!response2.ok) throw new Error(`HTTP error! status: ${response2.status}`);
        const data2 = await response2.json();

        return data2;
    } 
    catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
/*fetchDataAndUseIt()
    .then(result => {
        console.log("Data from second server:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });*/
