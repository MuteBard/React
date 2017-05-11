import $ from 'jquery';

export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/page/' + title)
     .then(data => dispatch({
       type: 'one-page',
       value: data
     }));
  }
  return asyncAction;
}
