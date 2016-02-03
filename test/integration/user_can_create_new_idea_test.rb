require 'test_helper'

class UserCanCreateNewIdeaTest < ActionDispatch::IntegrationTest
  test "user can create new idea" do
    visit "/"

    within ".new-idea-form" do
      fill_in "Title:", with: "My Idea"
      fill_in "Body:",  with: "My idea's body"

      click_button "Save"
    end

    
  end
end
