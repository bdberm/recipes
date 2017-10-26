import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const recipes = this.props.recipes.map((recipe, idx) => {
      return <RecipeIndexItem key={idx} recipe={recipe} />;
    });

    return (
      <div className="index-wrapper">
        <ul className="recipe-index">
          {recipes}
        </ul>
      </div>
    );

  }

}

export default RecipeIndex;
