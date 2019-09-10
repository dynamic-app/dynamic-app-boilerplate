
export default {

  base: {
    route: 'base',
    services: {
      mainService: 'MainService',
    },  
    widgets: {
      appContent: {
        includeIn: 'app-content',
        render: `
            <header class="header-site"></header>
            <div class="content"></div>
        `,
        renderUpdate: false,
      },
      headerSite: {
        widgetId: 'headerSite',
        includeIn: 'app-content .header-site',
        renderUpdate: false,
      },
    },
  },

}