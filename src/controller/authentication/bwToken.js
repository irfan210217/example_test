import base64 from "base-64";

const newToken = () => {
    const token = {};

    token.createAccessToken = (config) => {
        let iat = new Date().getTime();
        let id = new Date().getMilliseconds()
        let exp = new Date(Date.now() + 3 * 60 * 1000).getTime();

        const tokenConfig = {
            idLogin: id + 1573 - 200 * 53,
            iat: iat,
            userID: config.userID,
            admin: config.admin,
            exp: exp
        };

        return base64.encode(JSON.stringify(tokenConfig));
    };

    token.createRefreshToken = (config) => {
        let id = new Date().getMilliseconds()
        let exp = new Date(Date.now() + 7 * 60 * 60 * 1000).getTime();

        const tokenConfig = {
            code: id + 341,
            nt: true,
            yr: Date.now(),
            exp: exp
        };

        return base64.encode(JSON.stringify(tokenConfig));
    }

    return token;
};


export const BWT = {};

BWT.createToken = (config) => {
  const Token = newToken();
  
  const result = {
    accessToken : Token.createAccessToken(config),
    refreshToken : Token.createRefreshToken(config)
  };
  
  return result;
};
   
BWT.verifyToken = (token) => {
  const date = new Date().getTime();
  const decode = JSON.parse(base64.decode(token));
  
  if (date > decode.exp) return false
  
  return true;
};
