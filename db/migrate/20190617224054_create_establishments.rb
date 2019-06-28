class CreateEstablishments < ActiveRecord::Migration[5.2]
  def change
    create_table :establishments do |t|
      t.references :admin, foreign_key: true
      t.string :company_name
      t.string :coffee_or_beer
      t.string :phone
      t.string :website
      t.string :street_1
      t.string :street_2
      t.string :city
      t.string :state
      t.integer :zip
      t.string :hours_of_operation
      t.boolean :pet_friendly
      t.boolean :wifi

      t.timestamps
    end
  end
end
