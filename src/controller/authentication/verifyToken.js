import {BWT} from "./bwToken.js";
import User from "../../models/User.js";

export const verifyToken = async (req, res, next) => {
   let accessToken = req.headers['authorization'];
   let refreshToken = req.headers['access-authorization']
    
   try {
        if (!accessToken && !refreshToken) return re.sendStatus(400);
      
        const checkToken = await User.findOne({
           where: {
             token: refreshToken
           }
         });
      
         if (checkToken === null) return res.json({
           status: false,
           message: 'Token expired'
          });
      
          const verifyRefreshToken = BWT.verifyToken(refreshToken);
          if (verifyRefreshToken === false) return res.sendStatus(401);
          
          const verifyAccessToken = BWT.verifyToken(accessToken);
          if (verifyAccessToken === false) return res.json({
            status: false,
            message: 'Token expired'
          });
      
          next();
    } catch (error) {
      console.log(error)
    }
};
