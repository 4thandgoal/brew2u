class AddFieldsToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :first_name, :string
    add_column :admins, :last_name, :string
    add_column :admins, :phone, :string
    add_column :admins, :street_1, :string
    add_column :admins, :street_2, :string
    add_column :admins, :city, :string
    add_column :admins, :state, :string
    add_column :admins, :zip, :integer
  end
end
