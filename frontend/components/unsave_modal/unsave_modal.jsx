import React from 'react';

class UnSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnsave = this.handleUnsave.bind(this);
  }

  handleUnsave(e) {
    const {unsaveRecipe, removeModal} = this.props;
    unsaveRecipe(this.props.recipe.id);
    removeModal();
  }


  render () {
    const {recipe, removeModal} = this.props;
    return (

      <div className="unsave-modal">
        <h3>Are you sure you want to remove <span>{recipe.title}</span> from your recipe box?</h3>
        <div className="unsave-modal-buttons">
          <button onClick={removeModal}>No</button>
          <button onClick={this.handleUnsave}>Yes</button>
        </div>
        <span className="modal-close" onClick={this.props.removeModal}>
          &times;</span>
      </div>
    );
  }

}

export default UnSaveModal;
