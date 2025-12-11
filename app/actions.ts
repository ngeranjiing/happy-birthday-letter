'use server'

import * as cheerio from 'cheerio';

export async function getInstagramImage(url: string) {
    if (!url || !url.includes('instagram.com')) {
        return null;
    }

    // Helper to fetch with a specific UA
    const fetchWithUA = async (ua: string) => {
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': ua,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                },
                next: { revalidate: 3600 }
            });
            if (!response.ok) return null;
            return await response.text();
        } catch { return null; }
    };

    try {
        // Strategy 1: Masquerade as Googlebot (often bypasses login wall)
        let html = await fetchWithUA('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

        // Strategy 2: If that fails, try oEmbed API
        if (!html) {
            try {
                const oembedRes = await fetch(`https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`);
                if (oembedRes.ok) {
                    const json = await oembedRes.json();
                    if (json.thumbnail_url) return json.thumbnail_url;
                }
            } catch (e) {
                console.error("oEmbed failed", e);
            }
        }

        if (!html) return null;

        const $ = cheerio.load(html);

        // Try multiple meta tags
        const ogImage = $('meta[property="og:image"]').attr('content');
        if (ogImage) return ogImage;

        const twitterImage = $('meta[name="twitter:image"]').attr('content');
        if (twitterImage) return twitterImage;

        return null;

    } catch (error) {
        console.error("Error scraping Instagram image:", error);
        return null;
    }
}
