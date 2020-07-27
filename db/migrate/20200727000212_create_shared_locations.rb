class CreateSharedLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :shared_locations do |t|
      t.integer :location_id
      t.string :link

      t.timestamps
    end
  end
end
