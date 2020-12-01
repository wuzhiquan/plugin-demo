import WfBtns from './WfBtns'

const components = [
  WfBtns,
];

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
  WfBtns,
};

export default {
  install,
  WfBtns,
};
