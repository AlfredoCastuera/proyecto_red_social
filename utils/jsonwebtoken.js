import jwt from 'jsonwebtoken'

const signToken = (payload) => jwt.sign(payload, 'secret', { expiresIn: '1h' });

const decodeToken = (token) => jwt.verify(token, 'secret')

export default signToken
export { decodeToken }