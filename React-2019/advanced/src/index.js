import React from 'react';

// for rendering the DOM
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

// imported from components/App - which has CommentBox/List.js
import App from 'components/App';

{/* places content into public/index.html's div with root id */}

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
