import React from 'react';
import {convertMinutesToTimeString} from '../../util/time_converter';
import RecipeSaveButtonContainer from './recipe_save_button_container';
import CommentIndexContainer from '../comments/comment_index_container';

class RecipeShow extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

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
        <div key={idx}>
          <li>Step {idx+1}</li>
          <li>{step}</li>
        </div>
      ));
    }

    return (
      <section className = "recipe-show">
        <h1>{recipe.title}</h1>
        <div className="show-sub-header">
          <ul>
            <li>{recipe.authorName}</li>
              <ul>
                <li><span>Yield:</span>  {recipe.yield}</li>
                <li><span>Time:</span>  {convertMinutesToTimeString(recipe.minuteTime)}</li>
              </ul>
          </ul>
          <RecipeSaveButtonContainer recipe={recipe} />
        </div>
        <section className="recipe-description">
          <p>{recipe.description}</p>
          <img src={recipe.image_url} />
        </section>
        <section className="recipe-instructions">
          <div className = "ingredients">
            <h3>INGREDIENTS</h3>
              <ul >
                {ingredients}
              </ul>
          </div>
          <div className = "steps">
            <h3>PREPARATION</h3>
              <ul >
                {steps}
              </ul>
          </div>
        </section>
        <CommentIndexContainer commentIds={recipe.commentIds}/>
      </section>
    );
  }

}

export default RecipeShow;
