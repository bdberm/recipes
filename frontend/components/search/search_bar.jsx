import React from 'react';
import {searchRecipes} from '../../util/search_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: "", searchResults: []};
    this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleInput(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    let searchResults;
    if (this.state.searchTerm === "") {
      searchResults = [];
    } else {
      searchResults = searchRecipes(this.props.recipes, this.state.searchTerm)
      .map((recipe, idx) => {
        return <li key={idx}>{recipe.title}</li>;
      }
    );
    }

    return (
      <section className={this.props.classStr}>
        <form onSubmit={this.handleSubmit} >
          <input type="text" placeholder="What would you like to cook?"
            onChange={this.handleInput} value={this.state.searchTerm} />
        </form>
        <ul className="search-dropdown">
          {searchResults}
        </ul>
      </section>
    );
  }
}

export default SearchBar;
