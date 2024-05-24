import bcrypt from 'bcrypt';
import User, {IUser} from '../models/user.model';

export const signup = async (user: IUser) => {
    const newUser = new User(user);
    try {
        await newUser.save();
        return { success: true, message: "User registered successfully." };
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        return { success: false, message };
    }
};

export const login = async (email: string, password: string) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return { success: false, message: "User not found." };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return { success: false, message: "Invalid password." };
        }

        return { success: true, message: "Login successful.", user };
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        return { success: false, message };
    }
};