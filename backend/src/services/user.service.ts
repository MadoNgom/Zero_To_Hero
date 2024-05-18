import bcrypt from 'bcrypt';
import User, {IUser} from '../models/user.model';

export const signup = async (user: IUser) => {
    const newUser = new User(user);

    return newUser.save();
};

export const login = async (email: string, password: string) => {
    const user = await User.findOne({
        email: email
    });

    if(!user) {
        return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return null;
    }

    return user;  
};