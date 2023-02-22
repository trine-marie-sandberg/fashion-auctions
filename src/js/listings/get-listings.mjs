export async function getListings(url, fetchOptions) {

    try {
        
            const response = await fetch(url, fetchOptions);
            const json = await response.json();
            const data = json;
            return data;
    } catch (error) {

        console.log(error);
    };
};