import { renderAsReact } from '../utils/renderAs.js';


class SimpaleReact extends React.Component {

  render() {
    
    const props = this.props;
    
    const items = ['one', 'two', 'three'];
    
    return (
      <div>
        <h1>My React component</h1>

        { items.map((item, key) => 
          <div key={key}>{ item }</div>
        )}
      </div>
    );
  }

}

export default renderAsReact(SimpaleReact);