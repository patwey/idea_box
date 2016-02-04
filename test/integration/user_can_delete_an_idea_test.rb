require 'test_helper'

class UserCanDeleteAnIdeaTest < ActionDispatch::IntegrationTest
  test "user can delete an idea" do
    create_idea("Deleteable Idea", "Body")

    visit "/"

    find ".idea[data-title='Deleteable Idea']"

    within ".idea[data-title='Deleteable Idea']" do
      find ".remove-idea"
      click_button "remove-idea"
    end

    refute page.has_css? ".idea[data-title='Deleteable Idea']"
  end
end
