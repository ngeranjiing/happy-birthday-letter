
const { getInstagramImage } = require('./app/actions');

async function test() {
    const url = "https://www.instagram.com/p/DR13CZej-h5/";
    console.log("Testing URL:", url);
    try {
        const result = await getInstagramImage(url);
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

test();
