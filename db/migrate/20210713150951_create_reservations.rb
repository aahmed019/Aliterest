class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
        t.date :start_date, null: false
        t.date :end_date, null: false
        t.integer :user_id
        t.integer :location_id
        t.integer :guest_amount, null: false
        t.timestamps
    end
        add_index :reservations, :user_id
        add_index :reservations, :location_id
  end
end
