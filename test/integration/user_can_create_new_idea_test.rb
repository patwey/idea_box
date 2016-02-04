require 'test_helper'

class UserCanCreateNewIdeaTest < ActionDispatch::IntegrationTest
  test "user can create new idea" do
    visit "/"

    within ".new-idea-form" do
      fill_in "Title:", with: "My Idea"
      fill_in "Body:",  with: "My idea's body"

      click_button "Save"
    end

    find ".idea[data-title='My Idea']"

    within ".idea[data-title='My Idea']" do
      assert page.has_css? ".panel-title", "My Idea"

      within ".panel-body" do
        assert page.has_content? "My idea's body"
        assert page.has_css? ".label", "swill"
      end
    end

    delete_idea("My Idea")
  end
end
