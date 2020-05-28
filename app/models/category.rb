class Category < ApplicationRecord
  validates :title, presence: true, uniqueness: {case_sensitive: false}
  has_many :urls, dependent: :nullify
  before_save :downcase_title

  private

  def downcase_title
    self.title.downcase!
  end
end
