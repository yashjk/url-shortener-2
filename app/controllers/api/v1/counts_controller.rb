class Api::V1::CountsController < ApplicationController
  def index
    @counts = Count.order(created_at: :desc).group_by { |count| count.created_at.strftime("%B %Y")}
    render json: { counts: @counts }
  end
end
