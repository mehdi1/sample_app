class PagesController < ApplicationController
  def home
	@titre = "Accueil"
  end
	
  def contact
	@titre = "Contact"
  end

  def about
        @titre = "A Propos"
  end

  def salaries
        @titre = "Fiche"
  end

end
