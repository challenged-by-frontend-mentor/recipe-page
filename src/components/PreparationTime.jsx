const PreparationTime = () => {
  const PREPARATION_DATA = [
    { topic: "Total", time: 10, approximate: true },
    { topic: "Preparation", time: 5, approximate: false },
    { topic: "Cooking", time: 5, approximate: false },
  ];

  return (
    <article className="prep-time">
      <h3 className="prep-time__title">Preparation time</h3>
      <ul className="prep-time__list">
        {PREPARATION_DATA.map((item) => (
          <li className="prep-time__item" key={item.topic}>
            <em className="prep-time__item-emphasize">{item.topic}:</em>{" "}
            {item.approximate ? "Approximately" : ""} {item.time} minutes
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PreparationTime;
