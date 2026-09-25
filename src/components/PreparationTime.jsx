const PREPARATION_DATA = [
  { topic: "Total", time: 10, approximate: true },
  { topic: "Preparation", time: 5, approximate: false },
  { topic: "Cooking", time: 5, approximate: false },
];

const PreparationTime = () => (
  <aside className="prep-time" aria-label="Preparation time summary">
    <h2 className="prep-time__title">Preparation time</h2>
    <ul className="prep-time__list">
      {PREPARATION_DATA.map((item) => (
        <li className="prep-time__item" key={item.topic}>
          <span className="prep-time__content">
            <strong className="prep-time__label">
              {item.topic}:
            </strong>{" "}
            {item.approximate ? "Approximately" : ""} {item.time} minutes
          </span>
        </li>
      ))}
    </ul>
  </aside>
);

export default PreparationTime;
