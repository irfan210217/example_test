import User from "../models/User.js";

export const getData = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user)
    } catch (error) {
        console.log(error);
    }
};
