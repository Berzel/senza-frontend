import { SvgIcon } from '@mui/material';

const JobSummaryDetails = ({ job }) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <>
      <div className="top">
        <div className="top_logo">
          {job?.company?.img ? (
            <img src={job.company.img} alt={`${job.company.name} logo`} title={`${job.company.name}`} />
          ) : (
            <SvgIcon
              sx={{ height: 56, width: 56 }}
              viewBox="0 0 32 32"
              enableBackground="new 0 0 512 512"
            >
              <g>
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_2"
                  data-name="Layer 2"
                >
                  <path d="M29.22,20.2l-4.32-4.36a.19.19,0,0,0-.17-.07.24.24,0,0,0-.17.08L21.68,18.9a2,2,0,0,1-1.45.63h0a2,2,0,0,1-1.45-.63L12.6,12.31a.24.24,0,0,0-.32,0l-9.62,7.5L1.42,18.2,11,10.7a2.23,2.23,0,0,1,3,.24l6.17,6.59,2.86-3.05a2.22,2.22,0,0,1,1.6-.71,2.18,2.18,0,0,1,1.62.66l4.32,4.36Z"></path>
                  <path d="M27.08,31H4.92A3.92,3.92,0,0,1,1,27.08V4.92A3.92,3.92,0,0,1,4.92,1H27.08A3.92,3.92,0,0,1,31,4.92V27.08A3.92,3.92,0,0,1,27.08,31ZM4.92,3A1.92,1.92,0,0,0,3,4.92V27.08A1.92,1.92,0,0,0,4.92,29H27.08A1.92,1.92,0,0,0,29,27.08V4.92A1.92,1.92,0,0,0,27.08,3Z"></path>
                  <circle cx="20.33" cy="9.83" r="2"></circle>
                  <path d="M2,19.5l9.53-7.67,1.76-.21,5.77,6.16s1,1.37,1.85.43l2.87-3.05s.57-1.25,1.79,0S30,20.5,30,20.5l-.07,7.23S29.63,30,26.69,30s-22-.31-22-.31S2,30.35,2,27.08,2,19.5,2,19.5Z"></path>
                </g>
              </g>
            </SvgIcon>
          )}
        </div>
        <div className="left">
          <div className="pills">
            {job?.company ? (
              <span className="company-name" title={`${job.company.name}`}>{job.company.name}</span>
            ) : (
              <span className="company-name">A local company</span>
            )}
          </div>
          <h3 className="title">{job.title}</h3>
          <div className="salary">
            ${formatter.format(job.min_wage)} - ${formatter.format(job.max_wage)} /{' '}
            {job.wage_period}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <i className="pin">
            <svg
              enableBackground="new 0 0 368.16 368.16"
              version="1.1"
              viewBox="0 0 368.16 368.16"
            >
              <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" />
              <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" />
            </svg>
          </i>
          <p className="location">
            {job.country.name}, {`${job.is_remote ? 'Remote' : job.city}`}
          </p>
        </div>
        <div className="right">
          <p className="location">{job.created_ago}</p>
        </div>
      </div>
    </>
  );
};

export default JobSummaryDetails;
