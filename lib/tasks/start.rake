# rake task to start both react and rails server
# this can also be done with foreman gem

namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'
