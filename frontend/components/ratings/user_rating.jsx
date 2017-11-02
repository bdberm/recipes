import React from 'react';

class UserRating extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {ratingVal, recipeId, action, currentRating} = this.props;
    const rating = {rating: ratingVal};

    if (currentRating) {
      rating.id = currentRating.id;
      action(rating);
    } else {
      action(rating, recipeId);
    }
  }

  render() {
    const {currentRating, ratingVal, action} = this.props;
    const comparison  = currentRating ? currentRating.rating : null;
    let classStr;
    
    if (!comparison) {
      classStr = "overall-empty";
    }
    else if (ratingVal > comparison) {
      classStr = "overall-empty";
    } else {
      classStr = "user-filled";
    }

    return (
      <li className={classStr} onClick={this.handleClick}></li>
    );
  }
}

export default UserRating;
