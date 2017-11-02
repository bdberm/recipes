import React from 'react';


class Rating extends React.Component {


  render () {
    const {comparison, ratingVal} = this.props;

    let classStr;
    if (ratingVal > comparison) {
      classStr = "overall-empty";
    } else {
      classStr = "overall-filled";
    }

    return (
      <li className={classStr}></li>
    );

  }

}

export default Rating;
