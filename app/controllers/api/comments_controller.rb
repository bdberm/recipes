class Api::CommentsController < ApplicationController

  def create
    @recipe = Recipe.find(params[:recipe_id])
    user = self.current_user
    @comment = Comment.new(comment_params)
    @comment.recipe_id = recipe.id
    @comment.user_id = user.id

    if @comment.save
      render "api/recipes/comments"
    else
      render json: comment.errors.full_messages, status: 422
    end


  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      @recipe = Recipe.find(comment.recipe_id)
      render "api/recipes/comments"
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if comment
      @recipe = Recipe.find(comment.recipe_id)
      @comment.destroy
      render "api/recipes/comments"
    else
      render json: ["No Comment To Delete"]
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_name, :body)
  end


end
