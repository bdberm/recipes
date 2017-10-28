import React from 'react';

class RecipeIndexItemSave extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const {recipe, recipeSaved, launchLogin, launchUnsaveModal,
      saveRecipe} = this.props;

    if (recipeSaved === "No User") {
      launchLogin();
    } else if (recipeSaved === true) {
      launchUnsaveModal(recipe);
    } else {
      saveRecipe(recipe.id);
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
