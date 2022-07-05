const Ingredient = ({ amount, measurement, name }) => (
  <li>
    <span className="amount">{amount} </span>
    <span className="measurement">{measurement} </span>
    <span className="name">{name}</span>
  </li>
);

const Instructions = ({ title, steps }) => (
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((s, i) => (
      <p key={i}>{s}</p>
    ))}
  </section>
);

const IngredientsList = ({ list }) => (
  <ul className="ingredients">
    {list.map((ingredient, i) => (
      <Ingredient key={i} {...ingredient} />
    ))}
  </ul>
);

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="조리 절차" steps={steps} />
  </section>
);

const Menu = ({ recipes }) => (
  <article>
    <header>
      <h1>맛있는 조리법</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  </article>
);

export default Menu;
