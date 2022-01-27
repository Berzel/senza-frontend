const JobPosting = job => {
    const datePosted = (new Date(job.updated_at)).toISOString().split("T")[0];
    const applicationDeadline = (new Date(job.application_deadline)).toISOString().split("T")[0];
    const hiringOrganization = job.company.name ? `{
            "@type" : "Organization",
            "name" : "${job.company.name}",
            "sameAs" : "${job.company.website ?? 'https://senza.co.zw'}",
            "logo" : "${job.company.img ?? ''}"
        }` : `confidential`;

    const employmentType = type => {

        const options = {};
        options["fixed-term"] = "CONTRACTOR";
        options["part-time"] = "PART_TIME";
        options["full-time"] = "FULL_TIME";
        options["temporary"] = "TEMPORARY";
        options["zero-hours"] = "PER_DIEM";
        options["apprenticeship"] = "INTERN";

        return options[type];
    };

    const jobPostingStr = `{
        "@context" : "https://schema.org/",
        "@type" : "JobPosting",
        "title" : "${job.title}",
        "description" : "<div>
            <p>${job.description}</p><br />
            <div>
                <p>Duties &amp; Responsibilities</p>
                <ul>
                    ${job.responsibilities.map(r => `<li>${r.description}</li>`).join('')}
                </ul>
            </div> <br />
            <div>
                <p>Qualifications &amp; Experience</p>
                <ul>
                    ${job.qualifications.map(q => `<li>${q.description}</li>`).join('')}
                </ul>
            </div> <br />
        </div>",
        "datePosted" : "${datePosted}",
        "validThrough" : "${applicationDeadline}",
        "employmentType" : "${employmentType(job.contract_type.slug)}",
        "hiringOrganization" : ${hiringOrganization},
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "${job.city}",
                "addressCountry": "ZW"
            }
        },
    }`;

    return jobPostingStr;
}

export default JobPosting;