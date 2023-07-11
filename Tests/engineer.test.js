const Engineer = require('../Assets/Engineer');

describe('Engineer', () => {
  it('shows Engineer information', () => {
    const engineer = new Engineer('Engineer Test', 1234, 'email@example.com', 'EngineerTest');

    expect(engineer.name).toEqual('Engineer Test');
    expect(engineer.id).toEqual(1234);
    expect(engineer.email).toEqual('email@example.com');
    expect(engineer.getGithub()).toBe('EngineerTest');
  });
});

