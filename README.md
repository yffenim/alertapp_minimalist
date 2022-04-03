## How to Run:

`bundle install`

`rails db:migrate db:seed`

`rails s`

## Project Design and Intentions

### 1. having two types of users: admin and firefighters

_admin:_ 
- needs to be able to access all user data, alert data, oura data 

_firefighters:_
- needs to access self data
- needs to crud alerts

## design from minimalist upwards

### key takeaways from https://12factor.net/ 

### the minimum needed:
_ruby version:_ using the latest

_rails version:_ using 6.1.4.6 bc mongo works better with this version... i vaguely recall
_back-end:_ rails api-only mode, using v 6.1.4.6 bc mongo needs this

_database:_ default sqlite for dev, postgres for production because: https://devcenter.heroku.com/articles/sqlite3

_front-end:_ create-react-app for reducing complexity & learning purposes

### starting with api-only version of rails (`--api`)

This means I have to make decisions about middleware and controller modules:

https://guides.rubyonrails.org/api_app.html#choosing-middleware

https://guides.rubyonrails.org/v6.0/rails_on_rack.html#internal-middleware-stack

### using plugins
https://activeadmin.info/documentation.html


