class Api::V1::CategoriesController < ApplicationController
  before_action :fetch_category_list, only: [ :index ]

  def index
    render json: { category_list: fetch_category_list }
  end

  private
  def fetch_category_list
    @categories = Category.order(created_at: :desc)
  end
end
