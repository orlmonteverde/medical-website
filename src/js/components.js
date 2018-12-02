Vue.component('service', {
  props: ['title', 'image', 'description'],
  template: `
  <div class="service">
    <div class="service__card">
      <div class="frontside" :style="{background: 'url(' + image + ')'}"></div>
      <div class="backside">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
  `
})

Vue.component('affiliate', {
  props: ['name', 'image', 'phone'],
  template: `
  <div class="affiliate__card" :style="{background: 'url(' + image + ')'}">
    <div class="affiliate__caption">
      <h3>{{ name }}</h3>
      <p><span class="fa fa-phone"></span>{{ phone }}</p>
    </div>
  </div>
  `
})

const vm = new Vue({
  el: '#app',
  data: {
    services: [
      {
        title: 'Service 1',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      },
      {
        title: 'Service 2',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      },
      {
        title: 'Service 3',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      },
      {
        title: 'Service 4',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      },
      {
        title: 'Service 5',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      },
      {
        title: 'Service 6',
        image: 'http://via.placeholder.com//300/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo'
      }
    ],
    affiliates: [
      {
        name: 'clinica 1',
        image: 'http://via.placeholder.com//250/250',
        phone: '0500 000 00 00'
      },
      {
        name: 'clinica 2',
        image: 'http://via.placeholder.com//250/250',
        phone: '0500 000 00 00'
      },
      {
        name: 'clinica 3',
        image: 'http://via.placeholder.com//250/250',
        phone: '0500 000 00 00'
      },
      {
        name: 'clinica 4',
        image: 'http://via.placeholder.com//250/250',
        phone: '0500 000 00 00'
      }
    ]
  }
})
