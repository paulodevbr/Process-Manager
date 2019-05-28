import { selectHome, makeSelectObjects } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectObjects', () => {
  const usernameSelector = makeSelectObjects();
  it('should select the username', () => {
    const username = 'mxstbr';
    const mockedState = {
      home: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
