import Templater from 'dynamic-app-templater';

/**
 * renderAsReact
 * @function
 * @param {object} component.
*/
export function renderAsReact(component) {
  return {
    render: function (el, props) {

      ReactDOM.render(
        React.createElement(component, props, null),
        el
      );

      el.onUpdate = (props) => {
        ReactDOM.render(
          React.createElement(component, props, null),
          el
        );
      };

      el.destroy = () => {
        ReactDOM.unmountComponentAtNode(el)
      };

    }
  };
}


/**
 * renderAsVue
 * @function
 * @param {object} component.
*/
export function renderAsVue(component) {
  return {
    render: function (el, props) {
     
      el.append(document.createElement('div'));
      
      new Vue({
        el: el.lastElementChild,
        ...component(props)
      });

      el.onUpdate = (props) => {
        new Vue({
          el: el.lastElementChild,
          ...component(props)
        });
      };

      el.destroy = () => {

      };

    }
  };
}


/**
 * renderAsTemplater
 * @function
 * @param {object} component.
*/
export function renderAsTemplater(component) {
  return {
    render: function (el, props) {

      Templater(el, component, props);

      el.onUpdate = (props) => {
        Templater(el, component, props);
      };

      el.destroy = () => {

      };

    }
  }
}
