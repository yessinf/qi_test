class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.integer :user_id
      t.text :address
      t.string :latitude
      t.string :longitude
      t.string :link

      t.timestamps
    end
  end
end
