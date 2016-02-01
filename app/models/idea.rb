class Idea < ActiveRecord::Base
  validates :title,   presence:   true,
                      uniqueness: true
  validates :body,    presence: true
  validates :quality, presence: true

  enum quality: %w(swill plausible genius)
end
