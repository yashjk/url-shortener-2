class Api::V1::UrlsController < ApplicationController
  before_action :url_params, only: [:create, :show, :update ]

  def create
    @url = Url.find_by(url_params)
    if @url.exists?
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

  def show
    @url = Url.find_by(url_params)
    if @url.exists?
      render status: :ok, json: { url: @url }
    else
      render status: :not_found, json: { notice: "Url not found."}
    end
  end

  def update
    @url = Url.find_by(id: params[:id])
    if @url.exists?
      if @url.update(url_params)
        render status: :ok, json: { notice: "Url updated successfully." }
      else
        render status: :unprocessable_entities, json: { errors: @url.errors.full_messages }
      end
    else
      render status: :not_found, json: { notice: "The provided Url is not found."}
    end
  end

  private

  def url_params
    params.require(:url).permit(:original, :shortened, :pinned, :category_id )
  end
end
