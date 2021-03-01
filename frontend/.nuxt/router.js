import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73100e40 = () => interopDefault(import('..\\pages\\index2.vue' /* webpackChunkName: "pages/index2" */))
const _f1c9e2e2 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _4c99539d = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _6157585e = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _50b8c8c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index2",
    component: _73100e40,
    name: "index2"
  }, {
    path: "/news",
    component: _f1c9e2e2,
    name: "news"
  }, {
    path: "/articles/:slug?",
    component: _4c99539d,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _6157585e,
    name: "categories-slug"
  }, {
    path: "/",
    component: _50b8c8c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
