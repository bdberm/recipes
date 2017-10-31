import React from 'react';
import {searchRecipes} from '../../util/search_util';
import SearchResultItem from './search_result_item';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: "", searchResults: []};
    this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleInput(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleExit(e) {
    this.setState({searchTerm: ""});
  }

  handleKey(e) {
    if (e.keyCode === 27  ) {
      this.setState({searchTerm: ""});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    
    let searchResults;
    if (this.state.searchTerm === "") {
      searchResults = [];
    } else {
      searchResults = searchRecipes(this.props.recipes, this.state.searchTerm)
      .map((recipe, idx) => {
        return <SearchResultItem classStr="search-result-item"
          recipe={recipe} key={idx} />;

      }
    );
    }

    return (
      <section className={this.props.classStr} onMouseLeave = {this.handleExit}
        onKeyDown={this.handleKey}
        >
        <form onSubmit={this.handleSubmit}  >
          <input type="text" placeholder="What would you like to cook?"
            onChange={this.handleInput} value={this.state.searchTerm} />
          <i></i>
        </form>
        <ul className="search-dropdown">
          {searchResults}
        </ul>
      </section>
    );
  }
}

export default SearchBar;
