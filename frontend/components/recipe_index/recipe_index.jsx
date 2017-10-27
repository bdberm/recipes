import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import LoginFormContainer from '../session_forms/login_form_container';

class RecipeIndex extends React.Component {

  componentDidMount() {
    if (this.props.location.search === "?protected=true"
        && !this.props.loggedIn) {
        this.props.recieveModal(LoginFormContainer);
    }
    this.props.fetchRecipes();
  }


  render() {
    const recipes = this.props.recipes.map((recipe, idx) => {
      return <RecipeIndexItem key={idx} recipe={recipe} />;
    });

    return (
      <div className="index-wrapper">
        <div className = 'index-header'>
          <h1>Find Your Next Culinary Masterpiece</h1>
          <p>Free Recipes, Guides and Tips For Easy, Delicious Cooking</p>
        </div>
        <ul className="recipe-index">
          {recipes}
        </ul>
      </div>
    );

  }

}

export default RecipeIndex;
