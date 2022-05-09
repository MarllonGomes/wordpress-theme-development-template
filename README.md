# Wordpress Theme Template

Template build with docker for development of wordpress templates based on docker

## Getting Started
```
git clone git@github.com:MarllonGomes/wordpress-theme-development-template.git

docker-compose up -d

npm i

npm run dev
```

## Preconfigured Libs
- laravel-mix
- laravel-mix-purgecss
- bootstrap5
- jquery
- jquery-mask
- swiper.js

## Commands
```
npm run dev -- start dev server at port 3000 watching for file changes

npm run prod -- build assets for production

npm run export -- zip the theme files
```

## Obs

- The docker mapping for .wpfiles it's necessary for IDE intellisense of wordpress functions
- php.ini file holds php extra configs with overwrites defaults docker wordpress image
