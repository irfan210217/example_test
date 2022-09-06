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
            message: "Akun belum terdaftar"
        });
        
        if (user.role === 0) return res.json({
          status : false,
          message : "Akun Terblokir"
        })

        if (password !== user.password) {
          const role = user.role - 1
          
          await User.update({ role : role },{
            where : {
              username: username 
            }
          });
          
          return res.json({
            status : false,
            message: "Password salah"
          })
        }

        const Token = BWT.createToken({ userID: user.username, admin: user.admin })

        await User.update({ token: Token.refreshToken, role: 3 }, {
            where: { 
                username: username
            }
        });

        res.cookie('token', Token.refreshToken, {
            httpOnly : true
        });

        res.json({
            status: true,
            message: "Success",
            token: Token
        });
        
    } catch (error) {
        console.log(error);
    }
};
