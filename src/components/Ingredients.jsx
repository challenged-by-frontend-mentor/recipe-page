const INGREDIENTS_DATA = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const Ingredients = () => (
  <section className="ingredients">
    <h2 className="ingredients__title">Ingredients</h2>
    <ul className="ingredients__list">
      {INGREDIENTS_DATA.map((item, index) => (
        <li className="ingredients__item" key={`ingredient-${index + 1}`}>
          <span className="ingredients__content">{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Ingredients;
