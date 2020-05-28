class Api::V1::CategoriesController < ApplicationController
  before_action :fetch_category_list, only: [ :index ]

  def index
    render json: { category_list: fetch_category_list }
  end

  def create
    @category = Category.find_by(category_params)
    if @category.exists?
      render status: :ok, json: { notice: "The provided category already exists." }
    else
      category = Category.new(category_params)
      if category.save
        render status: :ok, json: { notice: "Category created successfully." }
      else
        render status: :unprocessable_entities, json: { errors: category.errors.full_messages }
      end
    end
  end

  private
  def fetch_category_list
    @categories = Category.order(created_at: :desc)
  end

  def category_params
    params.require(:category).permit(:title)
  end
end
