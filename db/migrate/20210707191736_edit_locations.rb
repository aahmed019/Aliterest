class EditLocations < ActiveRecord::Migration[5.2]
  def change
    rename_column :locations, :longitude, :lng
    rename_column :locations, :latitude, :lat
  end
end
