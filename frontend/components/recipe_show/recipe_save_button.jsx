import React from 'react';

class RecipeSaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {recipe, buttonStr, launchUnsaveModal,
      saveRecipe} = this.props;
    if (buttonStr === "Saved") {
      launchUnsaveModal(recipe);
    } else {
      saveRecipe(recipe.id);
    }
  }

  render() {
    const {classStr, buttonStr} = this.props;
    return(
    <button onClick={this.handleClick} className={classStr}>
      <div></div>
      {buttonStr}</button>
    );
  }

}

export default RecipeSaveButton;
