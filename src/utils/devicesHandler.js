
function mediaQuery(DynamicApp, sizes) {

  function handler(flash = true) {
    const activeType = DynamicApp.getActiveStates(/media-/);
    const newType = Object.keys(sizes || {}).find(key =>
      window.innerWidth < sizes[key]
    );

    if (!activeType.includes('media-' + newType)) {
      DynamicApp.unactiveState(activeType, false);
      DynamicApp.activeState('media-' + newType, flash);
    }

    const orientation = window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
    DynamicApp.unactiveState(/orientation-/, false);
    DynamicApp.activeState('orientation-' + orientation, flash);
  }

  handler(false);

  window.addEventListener("resize", () => handler(true));
}

function devices(DynamicApp, options) {
  const devices = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  const browsers = /chrome|safary/i;

  let device = devices.exec(navigator.userAgent.toLowerCase())
  let browser = browsers.exec(navigator.userAgent.toLowerCase())

  device = device && device[0];
  browser = browser && browser[0];

  let userAgent;
  if (/android|iphone/.test(device)) {
    userAgent = 'mobile';
  } else if (/linux/.test(device)) {
    userAgent = 'tablet';
  } else if (/linux/.test(device)) {
    userAgent = 'desktop';
  }

  DynamicApp.activeState([
    'device-' + device,
    'browser-' + browser,
    'user-agent-' + userAgent
  ], false);
}

export default function DevicesHandler(DynamicApp, options) {
  mediaQuery(DynamicApp, options.sizes);
  devices(DynamicApp, options);
}