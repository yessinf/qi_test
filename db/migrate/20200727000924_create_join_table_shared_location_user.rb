class CreateJoinTableSharedLocationUser < ActiveRecord::Migration[6.0]
  def change
    create_join_table :shared_locations, :users do |t|
      t.index [:shared_location_id, :user_id]
      # t.index [:user_id, :shared_location_id]
    end
  end
end
