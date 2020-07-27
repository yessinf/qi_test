class SharedLocation < ApplicationRecord
	belongs_to :location
	has_and_belongs_to_many :users
end
