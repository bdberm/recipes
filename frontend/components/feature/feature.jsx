import React from 'react';
import RecipeIndexItemSaveContainer from '../recipe_index/recipe_index_item_save_container';

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.recipe.id);
  }

  handleClick(e) {
    this.props.history.push(`/recipes/${this.props.recipe.id}`);
  }



  render() {
    const {recipe, classStr} = this.props;
    const author = (this.props.recipe.authorName)
      ? `${this.props.recipe.authorName}` : '';

    return (
      <section className={classStr} onClick={this.handleClick}>
         <img src={recipe.image_url} />
         <div className="feature-info">
           <h2>{recipe.title}</h2>
           <h3>{author}</h3>
         </div>
         <div className="feature-label">RECIPE <br/> OF THE DAY</div>
         <RecipeIndexItemSaveContainer recipe={recipe} classStart="save-from-feature" />
       </section >
     );
  }
}

export default Feature;
