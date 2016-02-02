require 'test_helper'

class UserSavesAnIdeaTest < ActionDispatch::IntegrationTest
  test "user saves an idea" do
    Capybara.current_driver = Capybara.javascript_driver

    visit "/"

    fill_in "Title", with: "My Title"
    fill_in "Body",  with: "My Body"
    click_button "Save" # need to execute a script here?

    assert false
  end
end
