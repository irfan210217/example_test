import User from "../models/User.js";

export const register = async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username && !password) return res.sendStatus(400);
        
        const checkUser = await User.findOne({
          where : {
            username : username
          }
        });
        
        if (checkUser !== null) return res.sendStatus(400)

        await User.create(req.body);
        res.json({
            status : true,
            message : "Berhasil"
        })
    } catch (error) {
        console.log(error);
    }
}
