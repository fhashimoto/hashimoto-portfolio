import { IJobCard } from "../../Utils/Interface";

export const JobCard = ({ jobCard }: { jobCard: IJobCard }) => {
  const { company, companyDescription, date, description, job, location } =
    jobCard;
  return (
    <div className="embla__slide card">
      <div className="card-content">
        <h2 className="card-title">
          {company}, {location}
        </h2>
        <h3 className="card-subtitle">{companyDescription}</h3>
        <p className="card-date">
          {job}, {date}
        </p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
