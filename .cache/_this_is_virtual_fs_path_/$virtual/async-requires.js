// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-contentful-recipe-title-js": () => import("./../../../src/pages/{ContentfulRecipe.title}.js" /* webpackChunkName: "component---src-pages-contentful-recipe-title-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-recipes-js": () => import("./../../../src/pages/recipes.js" /* webpackChunkName: "component---src-pages-recipes-js" */),
  "component---src-pages-tags-js": () => import("./../../../src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */),
  "component---src-templates-tag-template-js": () => import("./../../../src/templates/tag-template.js" /* webpackChunkName: "component---src-templates-tag-template-js" */)
}

