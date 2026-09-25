const NUTRITION_DATA = [
  { nutrient: "Calories", amount: 277, unit: "kcal" },
  { nutrient: "Carbs", amount: 0, unit: "g" },
  { nutrient: "Protein", amount: 20, unit: "g" },
  { nutrient: "Fat", amount: 22, unit: "g" },
];

const Nutrition = () => (
  <section className="nutrition">
    <h2 className="nutrition__title">Nutrition</h2>
    <p className="nutrition__description">
      The table below shows nutritional values per serving without the
      additional fillings.
    </p>
    <table className="nutrition__table">
      <tbody className="nutrition__table-content">
        {NUTRITION_DATA.map((item) => (
          <tr className="nutrition__item" key={item.nutrient}>
                <td className="nutrition__nutrient">{item.nutrient}</td>
                <td className="nutrition__value">{item.amount}{item.unit}</td>
            </tr>
        ))}
        </tbody>
    </table>
  </section>
);

export default Nutrition