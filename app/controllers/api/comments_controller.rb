class Api::CommentsController < ApplicationController

  def create
    @recipe = Recipe.find(params[:recipe_id])
    user = self.current_user
    @comment = Comment.new(comment_params)
    @comment.recipe_id = @recipe.id
    @comment.user_id = user.id

    if @comment.save
      render "api/recipes/comments"
    else
      render json: @comment.errors.full_messages, status: 422
    end


  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      @recipe = Recipe.find(@comment.recipe_id)
      render "api/recipes/comments"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    begin
      @comment = Comment.find(params[:id])
      @recipe = Recipe.find(@comment.recipe_id)
      @comment.destroy
      render "api/recipes/comments"
    rescue
      render json: ["No Comment To Delete"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_name, :body, :parent_id)
  end


end
