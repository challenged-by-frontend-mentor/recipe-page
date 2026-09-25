const INSTRUCTION_DATA = [
  {
    title: "Beat the eggs",
    detail:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    detail:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    detail:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    detail:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    detail:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    detail: "Serve hot, with additional salt and pepper if needed.",
  },
];

const Instructions = () => (
  <section className="instructions">
    <h2 className="instructions__title">Instructions</h2>
    <ol className="instructions__list">
        {INSTRUCTION_DATA.map((item) => (
            <li className="instrucitons__list" key={item.title}>
                <em className="instructions__list--emphasize">{item.title}:</em> {item.detail}
            </li>
        ))}
    </ol>
  </section>
);

export default Instructions