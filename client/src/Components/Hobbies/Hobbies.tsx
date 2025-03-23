import { hobbyList } from "./hobby-list";
import "./Hobbies.scss"

export const Hobbies = () => {
  return (
    <section id="hobbies">
      <h2>Outside the Office</h2>
      <div className="hobby-list-container">
        {hobbyList.map((item) => (
          <div key={item.title} className="hobby-container">
            <img width={500} height={500} src={item.image} loading="lazy" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
