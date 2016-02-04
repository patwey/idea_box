require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index returns 200 OK response" do
    get :index, format: :json

    assert_equal 200, response.status
  end

  test "#index returns all of the ideas" do
    idea = ideas(:turing_school)
    get :index, format: :json

    assert_equal 2, parsed_body(response).count
    assert_equal idea.title, parsed_body(response).first["title"]
  end

  test "#show returns 200 OK response" do
    idea = ideas(:turing_school)

    get :show, id: idea.id, format: :json

    assert_equal 200, response.status
  end

  test "#show returns idea with given id" do
    idea = ideas(:rubyonrails)

    get :show, id: idea.id, format: :json

    assert_equal idea.title, parsed_body(response)["title"]
  end

  test "#create returns 201 Created response" do
    post :create, idea: prestige_worldwide, format: :json

    assert_equal 201, response.status
  end

  test "#create returns created idea" do
    post :create, idea: prestige_worldwide, format: :json

    assert_equal prestige_worldwide["body"], parsed_body(response)["body"]
  end

  test "#update returns 204 No Content response" do
    idea = create_idea

    put :update, id: idea.id, idea: prestige_worldwide, format: :json

    assert_equal 204, response.status
  end

  test "#update updates specified idea" do
    idea = create_idea

    put :update, id: idea.id, idea: prestige_worldwide, format: :json

    updated_idea = Idea.find(idea.id)

    assert_equal prestige_worldwide["body"], updated_idea.body
    refute_equal idea["body"], updated_idea.body
  end

  test "#destroy returns 204 No Content response" do
    idea = create_idea

    delete :destroy, id: idea.id, format: :json

    assert_equal 204, response.status
  end

  test "#destroy deletes specified idea" do
    idea = create_idea
    idea_count = Idea.count

    delete :destroy, id: idea.id, format: :json

    assert_equal (idea_count - 1), Idea.count
  end

  def parsed_body(response)
    JSON.parse(response.body)
  end

  def create_idea
    Idea.create!(title:   "New Idea",
                 body:    "The body of my idea",
                 quality: 2)
  end

  def prestige_worldwide
    { "title"   => "Prestige Worldwide",
      "body"    => "Worldwide...wide...wide",
      "quality" => 1 }
  end
end
