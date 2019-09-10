
// ------------------ Main imports ------------------ //

import DynamicApp from 'dynamic-app-core';
import 'app.css';


// ------------------ Setup - DynamicApp ------------------ //

import DevicesHandler from './utils/devicesHandler.js';
import services from './services/index.js';
import widgets from './widgets/index.js';
import containers from './containers/index.js';

// set DynamicApp configs
DynamicApp.setConfig({
  services,
  widgets,
  containers,
});

// devices states handler
new DevicesHandler(DynamicApp, {
  size: {
    desktop: '1200px',
    modbile: '640px',
  }
});

DynamicApp.flash();


// ------------------ END ------------------ //
