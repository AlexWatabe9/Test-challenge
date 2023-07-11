const Manager = require('../Assets/Manager');

describe('Manager', () => {
  it('shows manager information', () => {
    const manager = new Manager('Manager Test', 1234, 'email@example.com', '123-456-7890');

    expect(manager.name).toEqual('Manager Test');
    expect(manager.id).toEqual(1234);
    expect(manager.email).toEqual('email@example.com');
    expect(manager.officeNumber).toEqual('123-456-7890');
  });
});

