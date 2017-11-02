import React from 'react';
import {convertMinutesToTimeString} from '../../util/time_converter';
import RecipeSaveButtonContainer from './recipe_save_button_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';
import OverallRating from '../ratings/overall_rating';
import UserRatingContainer from '../ratings/user_rating_container';
import {RatingHover} from '../transitions/fade';



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
    this.setState({
      ratingHover: true,
      hoverComp: parseInt(e.target.getAttribute("val")),
    });
  }

  ratingHoverDown(e)  {
    this.setState({ratingHover: false});
  }

  setHoverRating(val) {
    this.setState({hoverComp: val});
  }




  render() {

    const {recipe, numRatings, averageRating, currentUserRating} = this.props;
    let ingredients = [];
    let steps = [];
    let overallStars = [];
    // let userStars =[];

    let userStars = [1,2,3,4,5].map((val) => (
      <UserRatingContainer key={val}  ratingVal = {val}
        currentRating={currentUserRating} recipeId = {recipe.id}
        />
    ));

    let ratingStr = "Rate recipe";

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

    if (currentUserRating) {
      ratingStr = "Your rating";

      let comparison;
      if (this.state.ratingHover) {
        comparison = this.state.hoverComp;
      } else if (currentUserRating) {
        comparison = currentUserRating.rating;
      }

      // const comparison = Math.round(currentUserRating.rating);
      userStars = [1,2,3,4,5].map((val) => (
        <UserRatingContainer key={val} currentRating={currentUserRating} ratingVal = {val}
           recipeId = {recipe.id} comparison={comparison} setHoverRating={this.setHoverRating}
          />
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
              <RatingHover in={this.state.ratingHover} component={<div></div>} />
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
