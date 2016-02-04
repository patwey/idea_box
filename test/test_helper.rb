ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/pride'
require 'capybara/rails'
require 'database_cleaner'

class ActiveSupport::TestCase
  fixtures :all
end

class ActionDispatch::IntegrationTest
  include Capybara::DSL

  def setup
    DatabaseCleaner.start
    Capybara.current_driver = :selenium
  end

  def teardown
    DatabaseCleaner.clean
    Capybara.current_driver = Capybara.default_driver
  end

  def create_idea(title, body)
    within ".new-idea-form" do
      fill_in "Title:", with: title
      fill_in "Body:",  with: body

      click_button "Save"
    end
  end
end
