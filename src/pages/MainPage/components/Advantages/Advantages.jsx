import "./Advantages.scss";

export function Advantages({ obj }) {
  return (
    <div className="advantages__container">
      <ul className="advantages__list">
        {obj.map((elem) => {
          return (
            <li key={elem.id} className="advantages__list-item">
              <img className="advantages-img" src={elem.img} alt={elem.alt} />
              <h6 className="advantages__title">{elem.title}</h6>
              <p className="advantages__text usual-font-p">{elem.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
