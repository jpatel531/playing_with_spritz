require 'rubygems'
require 'sinatra'
require 'haml'

# Helpers
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'

# Application routes
get '/' do
  haml :index, :layout => :'layouts/application'
end

get '/about' do
  haml :about, :layout => :'layouts/application'
end

get '/login_success' do
	erb :login_success
end