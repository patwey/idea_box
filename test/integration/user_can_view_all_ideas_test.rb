require 'test_helper'

class UserCanViewAllIdeasTest < ActionDispatch::IntegrationTest
  test "user can view all ideas" do
    visit "/"

    within "#ideas" do
      find ".idea[data-title='Ruby on Rails']"
      within ".idea[data-title='Ruby on Rails']" do
        assert page.has_css? ".panel-title", "Ruby on Rails"

        within ".panel-body" do
          assert page.has_content? "A web framework"
          assert page.has_css? ".label", "genius"
        end
      end

      find ".idea[data-title='Turing School']"
      within ".idea[data-title='Turing School']" do
        assert page.has_css? ".panel-title", "Turing School"

        within ".panel-body" do
          assert page.has_content? "A school for developers"
          assert page.has_css? ".label", "plausible"
        end
      end
    end
  end
end
