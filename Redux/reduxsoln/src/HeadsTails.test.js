import reducer from './HeadsTails.reducer'

it('starts with nothing at load', () => {
  expect(reducer(undefined, {type : 'init'})).toEqual(-1)
});

it('can change to heads', () => {
  let action = {
    type : 'heads'
  };
  expect(reducer(0, action)).toEqual(1);
});

it('can change to tails', () => {
  let action = {
    type : 'tails'
  };
  expect(reducer(1, action)).toEqual(0);
});
