class Alert < ApplicationRecord
  belongs_to :user, foreign_key: :user_id
  validates :level, numericality: { only_integer: true }

end
