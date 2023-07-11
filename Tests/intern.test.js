const Intern = require('../Assets/Intern');

describe('Intern', () => {
  it('shows Intern information', () => {
    const intern = new Intern('Intern Test', 1234, 'email@example.com', 'UofA');

    expect(intern.name).toEqual('Intern Test');
    expect(intern.id).toEqual(1234);
    expect(intern.email).toEqual('email@example.com');
    expect(intern.school).toEqual('UofA');
  });
});
