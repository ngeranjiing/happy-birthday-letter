
const cheerio = require('cheerio');

async function testVideo() {
    const target = "https://www.instagram.com/p/DR13CZej-h5/";
    console.log("Testing:", target);

    // Method 1: Direct Scraping
    try {
        const res = await fetch(target, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
            }
        });
        console.log("Direct status:", res.status);
        const html = await res.text();
        const $ = cheerio.load(html);
        const og = $('meta[property="og:image"]').attr('content');
        console.log("Direct OG:", og);
    } catch (e) { console.error("Direct failed", e); }

    // Method 2: oEmbed
    try {
        const oembedUrl = `https://api.instagram.com/oembed/?url=${target}`;
        const res = await fetch(oembedUrl);
        console.log("oEmbed status:", res.status);
        if (res.ok) {
            const json = await res.json();
            console.log("oEmbed thumbnail:", json.thumbnail_url);
        } else {
            console.log("oEmbed failed text:", await res.text());
        }
    } catch (e) { console.error("oEmbed error", e); }
}

testVideo();
