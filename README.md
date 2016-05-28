# viljark.github.io

> FE experiments by Viljar K.

## Deployment to GitHub pages
```
npm run build
git commit -am "update live" && push
git push origin `git subtree split --prefix dist dev`:master --force
```
## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
