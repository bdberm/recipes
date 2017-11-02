import React from 'react';


class UserRating extends React.Component {
  constructor(props) {
    super(props);


    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    const {setHoverRating, ratingVal} = this.props;
    this.props.setHoverRating(ratingVal);
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
    const {ratingVal, action, comparison} = this.props;

    let classStr;

    if (!comparison) {
      classStr = "user-empty";
    }
    else if (ratingVal > comparison) {
      classStr = "user-empty";
    } else {
      classStr = "user-filled";
    }

    return (
      <li className={classStr} val={ratingVal}
        onMouseEnter={this.handleHover} onClick={this.handleClick}>

      </li>
    );
  }
}

export default UserRating;
