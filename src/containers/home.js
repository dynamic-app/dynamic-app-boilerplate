
export default {

  home: {
    route: '/',
    extends: 'base',
  
    widgets: {
      mySimpaleReact: {
        widgetId: 'simpaleReact',
        includeIn: 'app-content .content',
      },
      mySimpaleVue: {
        expresstion: true,
        widgetId: 'simpaleVue',
        includeIn: 'app-content .content',
      },
      mySimpaleTemplater: {
        widgetId: 'simpaleTemplater',
        includeIn: 'app-content .content',
      },
    },
  },

}