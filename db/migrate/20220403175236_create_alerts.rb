class CreateAlerts < ActiveRecord::Migration[6.1]
  def change
    create_table :alerts do |t|
      t.integer :level
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
