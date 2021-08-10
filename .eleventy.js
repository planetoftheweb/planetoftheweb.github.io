const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginTOC = require('eleventy-plugin-nesting-toc')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const now = new Date();
const livePosts = post => post.date <= now;

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addWatchTarget('_process/scss')

  eleventyConfig.addFilter('simpleDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'LLL dd, yyyy'
    )
  })

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2'],
    wrapper: 'div',
    wrapperClass: '',
  })

  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }
    return array.slice(0, n)
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addCollection('home', function (collection) {
    return collection.getFilteredByGlob(['./_site/posts/*.md', './_site/newsletter/*.md', './_site/toolbox/*.md', './_site/courses/*.md', './_site/videos/*.md']).filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `posts` directory
  eleventyConfig.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('./_site/posts/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `courses` directory
  eleventyConfig.addCollection('courses', function (collection) {
    return collection.getFilteredByGlob('./_site/courses/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `newsletter` directory
  eleventyConfig.addCollection('newsletter', function (collection) {
    return collection.getFilteredByGlob('./_site/newsletter/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `toolbox` directory
  eleventyConfig.addCollection('toolbox', function (collection) {
    return collection.getFilteredByGlob('./_site/toolbox/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `shorts` directory
  eleventyConfig.addCollection('shorts', function (collection) {
    return collection.getFilteredByGlob('./_site/shorts/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  // only content in the `videos` directory
  eleventyConfig.addCollection('videos', function (collection) {
    return collection.getFilteredByGlob('./_site/videos/*.md').filter(livePosts).filter(post => !Boolean(post.data.draft)).reverse()
  })

  eleventyConfig.addCollection('searchable', function (collection) {
    return collection
      .getFilteredByGlob([
        './_site/courses/*.md',
        './_site/posts/*.md',
        './_site/newsletter/*.md',
        './_site/toolbox/*.md',
        './_site/shorts/*.md',
        './_site/videos/*.md'
      ]).filter(livePosts)
      .reverse()
  })

  eleventyConfig.addCollection(
    'tagList',
    require('./_site/_includes/getTagList')
  )

  eleventyConfig.addPassthroughCopy("./_site/js/script.js");
  eleventyConfig.addPassthroughCopy("./_site/js/lite-yt-embed.js");
  eleventyConfig.addPassthroughCopy("./_site/images/favicon/favicon.ico");
  eleventyConfig.addPassthroughCopy("./_site/images/favicon/site.webmanifest");
  /* Markdown Plugins */
  let markdownIt = require('markdown-it')
  let markdownItAnchor = require('markdown-it-anchor')
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  }
  let opts = {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: ' ',
  }

  eleventyConfig.setLibrary(
    'md',
    markdownIt(options).use(markdownItAnchor, opts)
  )

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid', 'png', 'jpg', 'svg'],
    pathPrefix: '/',
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: '_site',
      templates: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: 'dev',
    },
  }
}
