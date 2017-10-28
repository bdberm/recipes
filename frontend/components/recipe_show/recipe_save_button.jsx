import React from 'react';

class RecipeSaveButton extends React.Component {

  render() {
    const {classStr, buttonStr} = this.props;
    return(
    <button className={classStr}>
      <div></div>
      {buttonStr}</button>
    );
  }

}

export default RecipeSaveButton;
