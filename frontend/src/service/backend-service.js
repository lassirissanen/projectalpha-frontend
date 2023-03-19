const baseUrl = 'http://localhost:5000';

async function get(path, message) {
    const url=`${baseUrl}${path}`;
    const data = {
        "message": message
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
    return null;
}

async function getTensorflowClassification(message) {
    const path="/classify-1";
    return await get(path, message);
}

async function getCombinedClassification(message) {
    const path = "/classify-2";
    return await get(path, message);
}

async function getOpenAIClassification(message) {
    const path="/classify-3";
    return await get(path, message);
}

export {
    getTensorflowClassification,
    getCombinedClassification,
    getOpenAIClassification
}
