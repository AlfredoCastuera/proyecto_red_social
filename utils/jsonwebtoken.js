import jwt from 'jsonwebtoken'

const signToken = (payload) => jwt.sign(payload, 'secret', { expiresIn: '1h' });

export default signToken