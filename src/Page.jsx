import React from 'react';
import Info from './Info.jsx';

const text1 = 'Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available';

class Page extends React.Component {
  state = {
    text: null,
  };

  setText = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className="page">
        <Info info={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
export default Page;
