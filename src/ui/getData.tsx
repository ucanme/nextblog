export  async function getData(path : string) {
    try {


        // post path
    return path
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
