import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

/*
it('shows a comment box', () => {

  // Tells JSDOM that there's a new div element, existing solely in memory, not in a browser
  const div = document.createElement('div');

  reactDOM.render(<App />, div);

  // in btwn the render and unmount, looks inside div
  // checks to see if commemtBox is in there
  // console.log(div.innerHTML);
  expect.(div.innerHTML).toContain('Comment Box');

  // for performance purposes, you unmount at the end of a test
  reactDOM.unmountComponentAtNode(div);
}

// In testing directory, type: npm run test
*/

/* Global it function (string comment, function containing our test logic) */
it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
