import reducer from './Dragon.reducer'
  it('check if there is a connection', () => {
    expect(reducer(undefined, {type : 'init'}).toEquals('connected'))
  });
