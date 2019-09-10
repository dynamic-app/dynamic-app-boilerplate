
export default {

  about: {
    route: '/about',
    extends: 'base',
    widgets: {
      aboutPage: {
        rulesAsHide: true,
        widgetId: 'aboutPage',
        includeIn: 'app-content .content',
      },
    },
  },

}