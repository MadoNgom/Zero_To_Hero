import * as dotenv from 'dotenv';

dotenv.config();

const jwtConfig = {
    jwt : {
        secret: process.env.JWT_SECRET || ""
    }
};

export default jwtConfig;