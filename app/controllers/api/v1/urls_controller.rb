class Api::V1::UrlsController < ApplicationController
  before_action :fetch_url_list, only: [ :index ]
  before_action :url_params, only: [ :create, :show, :update ]
  skip_before_action :verify_authenticity_token
  
  def index
    render json: { url_list: fetch_url_list}
  end

  def create
    @url = Url.find_by(url_params)
    if @url
      render status: :ok, json: { url: @url, notice: "The provided Url already exists."}
    else
      @url = Url.new(url_params)
      if @url.save
        render status: :ok, json: { url: @url, notice: "Url created successfully."}
      else
        render status: :unprocessable_entities, json: { errors: @url.errors.full_messages }
      end
    end
  end

  def update
    @url = Url.find_by( id: params[:id] )
    if @url
      if @url.update( url_params )
        render status: :ok, json: { url: @url, notice: "Url updated successfully." }
      else
        render status: :unprocessable_entities, json: { errors: @url.errors.full_messages }
      end
    else
      render status: :not_found, json: { notice: "The provided Url is not found."}
    end
  end

  def destroy
    @url = Url.find_by(id: params[:id])
    if @url
      @url.destroy!
      render status: :ok, json: { notice: "Url deleted successfully" }
    else
      render status: :not_found, json: { notice: "The provided Url is not found" }
    end
  end

  private

  def url_params
    params.require(:url).permit(:original, :shortened, :pinned, :category_id )
  end

  def fetch_url_list
    @urls = Url.order( pinned: :desc, created_at: :desc )
  end
end
