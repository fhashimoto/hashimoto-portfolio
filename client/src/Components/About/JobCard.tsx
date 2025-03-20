import { IJobCard } from "../../Utils/Interface";

export const JobCard = ({ jobCard }: { jobCard: IJobCard }) => {
  const {
    company,
    companyDescription,
    date,
    description,
    job,
    link,
    location,
  } = jobCard;
  return (
    <div className="embla__slide card">
      <div className="card-content">
        <h2 className="card-title">
          <a href={link} target="_blank">
            <strong>{company}</strong>, {location}
          </a>
        </h2>
        <h3 className="card-subtitle">
          <em>{companyDescription}</em>
        </h3>
        <p className="card-date">
          <strong>{job}</strong>, {date}
        </p>
        <ul className="card-description">
          {description.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
