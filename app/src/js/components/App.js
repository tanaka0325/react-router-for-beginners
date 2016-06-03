import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return(
      <div>
        This is App component!
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/articles/1">Article id=1</Link></li>
          <li><Link to="/dummy">dummy link</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
