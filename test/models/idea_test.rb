require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test "it is valid" do
    assert valid_idea.valid?
  end

  test "it is invalid without a title" do
    idea = valid_idea
    idea.title = nil

    refute idea.valid?
  end

  test "it is invalid without a unique title" do
    valid_idea.save

    idea = valid_idea
    idea.body = "New body"
    idea.quality = 1

    refute idea.valid?
  end

  test "it is invalid without a body" do
    idea = valid_idea
    idea.body = nil

    refute idea.valid?
  end

  test "it is invalid without a quality" do
    idea = valid_idea
    idea.quality = nil

    refute idea.valid?
  end

  def valid_idea
    Idea.new(title:   "Prestige Worldwide",
             body:    "Worldwide...wide...wide",
             quality: 2)
  end
end
