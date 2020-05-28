class Api::V1::UrlsController < ApplicationController
  before_action :url_params, only: [:create]

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


  private
  
  def url_params
    params.require(:url).permit(:original)
  end
end
