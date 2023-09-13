export const authMiddleware = (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden error' })
    }

    if (req.user.role === 'customer') {
        return res.status(403).json({ message: 'Forbidden error' })
    }
}