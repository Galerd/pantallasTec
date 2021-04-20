class AddPictureToPublications < ActiveRecord::Migration[6.1]
  def change
    add_column :publications, :picture, :string
  end
end
