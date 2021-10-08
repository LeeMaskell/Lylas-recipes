
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/contact.js")),
  "component---src-pages-contentful-recipe-title-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/{ContentfulRecipe.title}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/index.js")),
  "component---src-pages-recipes-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/recipes.js")),
  "component---src-pages-tags-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/pages/tags.js")),
  "component---src-templates-tag-template-js": preferDefault(require("/Users/lee/Documents/web_development/projects/personal_projects/Lylas-recipes/src/templates/tag-template.js"))
}

