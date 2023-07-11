const Employee = require('../Assets/Employee');

describe('Employee', () => {
  it('shows Employee information', () => {
    const employee = new Employee('Employee Test', 1234, 'email@example.com');

    expect(employee.name).toEqual('Employee Test');
    expect(employee.id).toEqual(1234);
    expect(employee.email).toEqual('email@example.com');
  });
});
