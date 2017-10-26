import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const recipes = this.props.recipes.map((recipe) => {
      return <RecipeIndexItem recipe={recipe} />;
    });

    return (
      <ul>
        {recipes}
      </ul>
    );

  }

}

export default RecipeIndex;
