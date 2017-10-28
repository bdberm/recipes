import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import LoginFormContainer from '../session_forms/login_form_container';

class RecipeIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes();
  }


  render() {

    const recipes = this.props.recipes.map((recipe, idx) => {
      return <RecipeIndexItem key={idx} recipe={recipe} />;
    });

    let headerText = "";
    let subheaderText = "";
    if (this.props.match.path === "/") {
      headerText = "Find Your Next Culinary Masterpiece";
      subheaderText = "Free Recipes, Guides and Tips For Easy, Delicious Cooking";
    }
    else if (this.props.match.path === "/recipe-box") {
      headerText = "Your Saved Recipes";
      subheaderText = "";
    }

    return (
      <div className="index-wrapper">
        <div className = 'index-header'>
          <h1>{headerText}</h1>
          <p>{subheaderText}</p>
        </div>
        <ul className="recipe-index">
          {recipes}
        </ul>
      </div>
    );

  }

}

export default RecipeIndex;
