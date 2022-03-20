const { getNewUser, mapObjectToArray } = require('./util');

describe('mapObjectToArray()', () => {
  it('maps values to array using a callback', () => {
    const result = mapObjectToArray(
      {
        age: 30,
        height: 65,
      },
      (key, val) => {
        return val + 10;
      },
    );

    expect(result).toEqual([40, 75]);
  });

  it('calls the callback', () => {
    const mockCallback = jest.fn();
    const result = mapObjectToArray(
      {
        age: 30,
        height: 65,
      },
      mockCallback,
    );

    expect(mockCallback.mock.calls.length).toBe(2);
  });
});

describe('getNewUser()', () => {
  test('it gets a user', async () => {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });

  test('no user found', async () => {
    expect.assertions(1);

    try {
      const user = await getNewUser(999);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
