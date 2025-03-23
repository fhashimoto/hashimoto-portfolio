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
        <h3 className="card-title">
          <a href={link} target="_blank">
            <strong>{company}</strong>, {location}
          </a>
        </h3>
        <p className="card-subtitle">
          <em>{companyDescription}</em>
        </p>
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
