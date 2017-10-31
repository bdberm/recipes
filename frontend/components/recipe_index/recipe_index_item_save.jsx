import React from 'react';

class RecipeIndexItemSave extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
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
    let buttonText = "";
    if(this.props.saved === true) {
      buttonText = "Saved";
    } else if (this.props.saved === false) {
      buttonText = "Save To Recipe Box";
    }
    const klass = this.props.classStart + " " + this.props.classStr;
    return(
      <button onClick={this.handleClick}
        className={klass}>
        <div></div>
        {buttonText}</button>
    );
  }

}

export default RecipeIndexItemSave;
