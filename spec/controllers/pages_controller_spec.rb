require 'spec_helper'

describe PagesController do

  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end
        it "devrait avoir le bon titre" do
      get 'home'
      response.should have_selector("title",
                        :content => "Simple App du Tutoriel Ruby on Rails |Acceuil")
    end
  end
  
  describe "GET 'contact'" do
    it "returns http success" do
      get 'contact'
      response.should be_success
    end
      it "devrait avoir le bon titre" do
      get 'contact'
      response.should have_selector("title",
                        :content => "Simple App du Tutoriel Ruby on Rails | Contact")
    end
  end

  describe "GET 'about'" do
    it "devrait réussir" do
      get 'about'
      response.should be_success
    end
        it "devrait avoir le bon titre" do
      get 'home'
      response.should have_selector("title",
                        :content => "Simple App du Tutoriel Ruby on Rails | A propos")
    end
  end

  describe "GET 'salaries'" do
    it "devrait réussir" do
      get 'salaries'
      response.should be_success
    end
        it "devrait avoir le bon titre" do
      get 'salaries'
      response.should have_selector("title",
                        :content => "Simple App du Tutoriel Ruby on Rails | Fiche")
    end
end
