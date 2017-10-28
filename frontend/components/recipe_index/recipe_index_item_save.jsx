import React from 'react';

class RecipeIndexItemSave extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const {recipeId, recipeSaved, launchLogin,
      saveRecipe, unsaveRecipe} = this.props;

    if (recipeSaved === "No User") {
      launchLogin();
    } else if (recipeSaved === true) {
      unsaveRecipe(recipeId);
    } else {
      saveRecipe(recipeId);
    }
  }

  render () {

    return(
      <button onClick={this.handleClick}
        className={this.props.classStr}></button>
    );
  }

}

export default RecipeIndexItemSave;
