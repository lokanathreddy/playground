class ApplicationController < ActionController::Base
  def hello
    render html: "om sai ram, ¡ hello world !"
  end

  def goodbye
    render html: "good bye!"
  end
end
