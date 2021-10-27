import axios from "axios";

const Sitemap = () => {};

export default Sitemap

export const getServerSideProps = async ({ req, res }) => {
    const sectors = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sitemaps/sectors`).then(r => r.data)
    let allPages = [await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sitemaps/jobs?size=1000`).then(r => r.data)];
    let lastEl = allPages[allPages.length - 1];
    let hostname = `https://${req.headers.host}`;

    while (!!lastEl?.next_page_url) {
        allPages = allPages.concat([await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sitemaps/jobs?size=1000&page=${lastEl.current_page + 1}`)])
        lastEl = allPages[allPages.length - 1]
    }

    const allJobs = allPages.reduce((currentJobs, nextEl) => currentJobs.concat(nextEl.data), [])

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            <url>
                <loc>${hostname}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>always</changefreq>
                <priority>1.0</priority>
            </url>
            ${
                sectors.map(sector => (
                    `<url>
                        <loc>${hostname}/jobs/${sector.slug}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>hourly</changefreq>
                        <priority>1.0</priority>
                    </url>`
                )).join('')
            }
            ${
                allJobs.map(job => (
                    `<url>
                        <loc>${hostname}/job/${job.slug}</loc>
                        <lastmod>${new Date(job.updated_at).toISOString()}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1.0</priority>
                    </url>`
                )).join('')
            }
        </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};