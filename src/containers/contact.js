
export default {

  contact: {
    route: '/contact',
    extends: 'base',
    widgets: {
      contactPage: {
        rulesAsHide: true,
        widgetId: 'contactPage',
        includeIn: 'app-content .content',
      },
    },
  },

}