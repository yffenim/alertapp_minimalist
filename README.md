## How to Run:

`bundle install`

`yarn install`

`rails db:migrate db:seed`

`rake start` 

Your browser should automatically load: `http://localhost:3000/` which is our front-end

Visit `http://localhost:3001/admin` for the Admin login (no React)

Visit `http://localhost:3001/api/alerts` for the current API endpoint

_Note: We are using `rake start` to launch both React dev server and rails API server at once via `Procfile.dev`. This rake task has been defined in `lib/tasks/start.rake`._

## Project Design and Intentions

### 1. Two types of users: admin and users (firefighters)

_admin:_ 
- needs to be able to access, display, and filter all user data, alert data, oura data 
- needs to be able to edit users, alerts, and other admin users

_users:_
- needs to access and display self data
- needs to crud alerts


### the minimum needed:

_ruby version:_ using the latest

_rails version:_ using 6.1.4.6 bc mongo works better with this version

_back-end:_ rails api-only mode, using 6.1.4.6 bc Mongoid dependecies require this version of rails

_database:_ default sqlite3 for dev, postgres for production because: https://devcenter.heroku.com/articles/sqlite3

_front-end:_ create-react-app for reducing complexity in transitioning to ReactNative



