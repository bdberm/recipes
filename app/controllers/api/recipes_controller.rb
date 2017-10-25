class Api::RecipesController < ApplicationController
  def index
    @Recipes = Recipe.all
  end

  def show
    @Recipe = Recipe.find(params[:id])
  end
end
