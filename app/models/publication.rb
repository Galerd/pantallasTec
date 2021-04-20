# == Schema Information
#
# Table name: publications
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string
#  picture     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Publication < ApplicationRecord  
    has_one_attached :picture
end
