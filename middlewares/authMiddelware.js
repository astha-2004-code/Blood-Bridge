const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({
        success: false,
        message: 'No token provided',
      });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'Invalid token',
        });
      }

      console.log('Decoded token:', decode);

      // ✅ FIXED: Use correct variable name
      req.user = { userId: decode.userId };
      next();
    });
  } catch (error) {
    console.log('Auth Middleware Error:', error);
    return res.status(401).send({
      success: false,
      message: 'Auth Failed',
      error,
    });
  }
};
