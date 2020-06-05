class Count < ApplicationRecord
  belongs_to :urls, optional: true
end
