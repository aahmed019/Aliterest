class CreateTerrain < ActiveRecord::Migration[5.2]
  def change
    create_table :terrains do |t|
        t.string :name, null: false
        t.string :description, null: false
    end
  end
end
