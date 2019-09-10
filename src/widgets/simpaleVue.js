import { renderAsVue } from '../utils/renderAs.js';


function SimpaleVue(props) {

  return {
    props: ['car'],

    data: {
      items: { 1: 'one', 2: 'two', 3: 'three' },
    },

    template: `
      <div>
        <h1>My Vue component</h1>
        <div v-for="item in items">{{ item }}</div>
      </div>
    `,

    computed: {
      myCar: function () {

      }
    },
  }
}

export default renderAsVue(SimpaleVue);