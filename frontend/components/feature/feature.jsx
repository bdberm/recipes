import React from 'react';

// const Feature = ({recipe, classStr}) => (
//   <section className={classStr}>
//     <img src={recipe.image_url} />
//     <div className="feature-info"></div>
//
//   </section >
// );

class Feature extends React.Component {

  componentDidMount() {
    this.props.fetchRecipe(this.props.recipe.id);
  }



  render() {
    const {recipe, classStr} = this.props;
    const author = (this.props.recipe.authorName)
      ? `${this.props.recipe.authorName}` : '';

    return (
      <section className={classStr}>
         <img src={recipe.image_url} />
         <div className="feature-info">
           <h2>{recipe.title}</h2>
           <h3>{author}</h3>
         </div>
         <div className="feature-label">RECIPE <br/> OF THE DAY</div>
       </section >
     );
  }
}

export default Feature;
