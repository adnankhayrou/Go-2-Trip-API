const { register } = require('../controllers/authController');
const { authRequest } = require('../requests/auth.request');
const userModel = require('../models/userModel');

jest.mock('../requests/auth.request');
jest.mock('../models/userModel');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

jest.mock('../mailer/mailToUser', () => ({
  sendMailToUser: jest.fn(),
}));

describe('register function', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: 'Test User',
        email: 'test@example.com',
        password: 'testpassword',
      },
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return error if registration validation fails', async () => {
    const validationError = { details: [{ message: 'Validation failed' }] };
    authRequest.RegisterValidation.mockReturnValueOnce({ error: validationError });

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Validation failed' });
  });

  it('should return error if email already exists', async () => {
    jest.mock('../controllers/authController');
    const registerMock = require('../controllers/authController').register;

    registerMock.mockImplementationOnce(async (req, res) => {
      userModel.findOne.mockResolvedValueOnce({ email: 'test@example.com' }); 
      res.status(400).json({ error: 'This Email is already exists Try To Sign in' });
    });

    await registerMock(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'This Email is already exists Try To Sign in' });
  });
});
