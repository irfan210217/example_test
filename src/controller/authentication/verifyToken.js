import { BWT } from "./bwToken.js";
import User from "../../models/User.js";

export const verifyToken = async (req, res, next) => {
    let accessToken = req.headers['authorization'];
    let refreshToken = req.headers['access-authorization'];

    if (!accessToken && !refreshToken) return res.sendStatus(403);

    const checkToken = await User.findOne({
        where: {
            token: refreshToken
        }
    });

    if (checkToken === null) return res.json({
        status: false,
        message: 'Token expired'
    });

    const verifyToken = BWT.verifyToken(accessToken);

    if (verifyToken === false) return res.json({
        status: false,
        message: 'Token expired'
    });

    next();
};