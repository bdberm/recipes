# README

[Live Demo](https://recipe-manage-app.herokuapp.com/#/)

FoodSnob is a full-stack web application inspired by the Cooking micro-site of the New York Times. It utilizes a Ruby on Rails backend, a PostgreSQL database and a React.js frontend utilizing a Redux store.

## Technologies
 * Ruby on Rails
 * Javascript
 * PostgreSQL
 * React
 * Redux
 * React Transition Group
 * Lodash
 * Node.js

## Features

### Recipes Index
Users can view a list of recipes within the index view. Each recipe's title, image, author and estimated time to prepare is shown.

There is a featured "Recipe Of The Day" showcased on the main page with an attendant hero image.

![index](https://github.com/bdberm/recipes/blob/master/readme_gifs/index.gif)

### Recipe Show Page
Users can view a recipe show page. Each recipe's description, author, yield, and time to prepare are shown at the top.  Just below is the overall rating and number of ratings, as well as the user's own rating if he/she has already rated the recipe. On scroll you see the ingredients and the steps needed to make the recipe. At the bottom of the page you can see all cooking notes left by users on the recipe. The show page is designed responsively so that elements stack vertically on smaller screens.

![show](https://github.com/bdberm/recipes/blob/master/readme_gifs/show.gif)

### Saving Recipes
A user can save or unsave a recipe to their Recipe Box from any index view or on any recipe show page. Clicking to unsave pops up a modal to confirm that the user wants to remove that recipe from their Recipe Box.

All saved recipes are accessible to a user in their Recipe Box.

![save](https://github.com/bdberm/recipes/blob/master/readme_gifs/save.gif)

### Recipe Search
Users can search for recipes in the search bar within the page header. Search results are automatically displayed. If a user clicks on a search result it will take the user to that recipe's show page. If a user presses enter they will go to an index view of the search results.

### Cooking Notes
A user can post a cooking note on a recipe show page which will be visible to all users who visit that show page.

A user can delete any of their own cooking notes.

![note](https://github.com/bdberm/recipes/blob/master/readme_gifs/note.gif)

### Recipe Ratings
A recipe show page will show the number and average of all ratings users have left on that recipe. It will also show the user's personal rating if they have left one. A user can change their rating once they have made one.

![rating](https://github.com/bdberm/recipes/blob/master/readme_gifs/rating.gif)

## Future Direction

Planned future features include:
 * Ability to reply to a cooking note with your own note
 * Ability to like comments and include a "most helpful" comments tab indicating which comments users liked the most
 * Tags/Categories are applied to recipes and displayed on the recipe show page. If a user clicks on a tag it will bring them to an index view of all recipes tagged with that tagged
 * Recipe Creation - Users can create new recipes. They can optionally upload an associated image and tag the recipe. They can choose whether or not to make the recipe public or private to just them
