import User from "../../models/User.js";
import { BWT } from "./bwToken.js";



export const Auth = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username && !password) return res.sendStatus(400);

        const user = await User.findOne({
            where: {
                username: username
            }
        });

        if (user === null) return res.json({
            status: false,
            message: "Anda belum terdaftar"
        });

        if (password !== user.password) return res.json({
            status: false,
            message: "Password anda salah"
        });

        const Token = BWT.createToken({ userID: user.username, admin: user.admin })

        await User.update({ token: Token.refreshToken }, {
            where: {
                username: username
            }
        })

        res.cookie('token', Token.refreshToken, {
            httpOnly : true
        })

        res.json({
            status: true,
            message: "Success",
            token: {
                accessToken: Token.accessToken,
                refreshToken: Token.refreshToken
            }
        })
    } catch (error) {
        console.log(error);
    }
};
