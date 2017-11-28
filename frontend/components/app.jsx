import React from 'react';
import {Route} from 'react-router-dom';
import GlobalNav from './global_nav/global_nav';
import Footer from './footer/footer';
import Modal from './modal';
import MainPageIndexContainer from './recipe_index/main_page_index_container';
import RecipeShowContainer from './recipe_show/recipe_show_container';
import {ProtectedRoute} from '../util/routes_util';
import RecipeBox from './recipe_index/save_box_index_container';
import SearchResult from './recipe_index/search_result_index_container';


const App = () => (
  <div>
    <Modal />
    <header>
      <GlobalNav />
    </header>
    <main>
      <Route exact path="/" component={MainPageIndexContainer} />
      <ProtectedRoute path="/recipes/:recipeId" component={RecipeShowContainer} />
      <ProtectedRoute path="/recipe-box" component={RecipeBox} />
      <ProtectedRoute path="/search/:searchQuery" component={SearchResult} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
