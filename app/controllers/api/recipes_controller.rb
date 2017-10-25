class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.includes(:author)
  end

  def show
    @recipe = Recipe.includes(:author, :ingredients, :steps).order('ingredients.ord, steps.ord').find(params[:id])
  end
end
