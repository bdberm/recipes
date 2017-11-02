import React from 'react';
import {convertMinutesToTimeString} from '../../util/time_converter';
import RecipeSaveButtonContainer from './recipe_save_button_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';
import OverallRating from '../ratings/overall_rating';
import UserRatingContainer from '../ratings/user_rating_container';
import {RatingHover} from '../transitions/fade';

const hoverStrings = {
  1: "Not Worth It",
  2: "Fine",
  3: "Good",
  4: "Really Good",
  5: "Delicious!"
};

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {ratingHover: false, hoverComp: 0};

    this.ratingHoverUp = this.ratingHoverUp.bind(this);
    this.ratingHoverDown = this.ratingHoverDown.bind(this);
    this.setHoverRating = this.setHoverRating.bind(this);
  }

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

  ratingHoverUp(e)  {
    console.log(parseInt(e.target.getAttribute("val")));
    this.setState({ratingHover: true});
  }

  ratingHoverDown(e)  {
    this.setState({ratingHover: false});
  }

  setHoverRating(val) {
    this.setState({hoverComp: val});
  }




  render() {

    const {recipe, numRatings, averageRating, currentUserRating} = this.props;
    const {ratingHover, hoverComp} = this.state;
    let ingredients = [];
    let steps = [];
    let overallStars = [];

    let comparison;
    if (ratingHover) {
      comparison = hoverComp;
    } else if (currentUserRating) {
      comparison = currentUserRating.rating;
    }

    const userStars = [1,2,3,4,5].map((val) => (
      <UserRatingContainer key={val} currentRating={currentUserRating} ratingVal = {val}
         recipeId = {recipe.id} comparison={comparison} setHoverRating={this.setHoverRating}
        />
    ));

    const ratingStr = currentUserRating ? "Your rating" : "Rate recipe";

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

      const avgComp = Math.round(averageRating);
      overallStars = [1,2,3,4,5].map((val) => (
        <OverallRating key={val} comparison={avgComp} ratingVal={val} />
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
            <h3>{ratingStr}</h3>
            <ul onMouseEnter = {this.ratingHoverUp} onMouseLeave = {this.ratingHoverDown} className="ratings">
              <RatingHover in={this.state.ratingHover} component=
                {<div className = "ratings-hover">{hoverStrings[hoverComp]}</div>} />
              {userStars}
            </ul>
          </div>
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
