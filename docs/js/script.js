var app = new Vue({
  el: '.searchbox',
  data: {
    query: null,
    content: [],
    isActive: false
  },
  methods: {
    handleBlur: function (e) {
      if (e.relatedTarget !== null) {
        console.log(e.relatedTarget.href)
        window.location = e.relatedTarget.href
      }
      this.isActive = false
    },
    handleClick: function (e) { }
  },
  computed: {
    queried: function () {
      return this.content.filter(item => {
        return (
          item.title.toLowerCase().match(this.query.toLowerCase()) ||
          item.tags.toLowerCase().match(this.query.toLowerCase())
        )
      })
    }
  },
  mounted: function () {
    fetch('/js/data.js')
      .then(response => response.json())
      .then(data => {
        this.content = data
      })
  }
})
