import React from 'react';
import {convertMinutesToTimeString} from '../../util/time_converter';
import RecipeSaveButtonContainer from './recipe_save_button_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';
import OverallRating from '../ratings/overall_rating';


class RecipeShow extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {

    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.recipeId;

    if (newId !== this.props.match.params.recipeId) {
      this.props.fetchRecipe(newId);
    }
  }

  render() {
    const {recipe, numRatings, averageRating} = this.props;
    let ingredients = [];
    let steps = [];
    let overallStars = [];

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

    if (averageRating) {
      const comparison = Math.round(averageRating);
      overallStars = [1,2,3,4,5].map((val) => (
        <OverallRating key={val} comparison={comparison} ratingVal={val} />
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
        <section className = "ratings-bar">
          <div>
            <h3>{numRatings} ratings</h3>
            <ul className="ratings">
              {overallStars}
            </ul>
          </div>
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
        <section className="comments-container">
          <h3>Cooking Notes</h3>
          <CreateCommentContainer recipeId={recipe.id} />
          <CommentIndexContainer commentIds={recipe.commentIds}/>
        </section>
      </section>
    );
  }

}

export default RecipeShow;
