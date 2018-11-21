// ANIMATION ON SCROLL INIT
AOS.init({
  duration: 1000
});

// M.sidenav init
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// M.Tabs init
const tabs = document.querySelector('.tabs');
M.Tabs.init(tabs, {})

// FAB init

const fixedActionButton = document.querySelector('.fixed-action-btn')
M.FloatingActionButton.init(fixedActionButton, {})
// ScrollSpy init
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});