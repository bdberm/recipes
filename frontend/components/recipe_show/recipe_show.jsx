import React from 'react';
import {convertMinutesToTimeString} from '../../util/time_converter';

class RecipeShow extends React.Component {

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.recipeId;
    if (newId !== newId) {
      this.props.fetchRecipe(newId);
    }
  }

  render() {
    const {recipe} = this.props;
    let ingredients = [];
    let steps = [];

    if (recipe.ingredients) {
       ingredients = recipe.ingredients.map((ingredient, idx) => (
        <li key={idx}>{ingredient}</li>
      ));
    }

    if (recipe.steps) {
      steps = recipe.steps.map((step, idx) => (
        <li key={idx}>{step}</li>
      ));
    }

    return (
      <section>
        <h1>{recipe.title}</h1>
        <div className="show-sub-header">
          <ul>
            <li>{recipe.authorName}</li>
            <li>Yield {recipe.yield}</li>
            <li>Time {convertMinutesToTimeString(recipe.minuteTime)}</li>
          </ul>
          <button>Save</button>
        </div>
        <section className="recipe-description">
          <p>{recipe.description}</p>
          <img src={recipe.image_url} />
        </section>
        <section className="recipe-instructions">
          <ul className = "ingredients">
            {ingredients}
          </ul>
          <ul className = "steps">
            {steps}
          </ul>
        </section>
      </section>
    );
  }

}

export default RecipeShow;
