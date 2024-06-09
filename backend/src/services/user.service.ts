import bcrypt from 'bcrypt';
import User, { IUser } from '../models/user.model';

export const signup = async (user: IUser) => {
    const newUser = new User(user);
    console.log(newUser);
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
         return { success: true, message: savedUser };
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        return { success: false, message };
    }
};

export const AddUser = async (userData: IUser) => {
    const user = new User(userData);
    return user.save();
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



export const createUser = async (userData: IUser) => {
    const user = new User(userData);
    return user.save();
};

export const findAllUsers = async () => {
    return User.find();
};

export const findUserById = async (id: string) => {
    return User.findById(id);
};

export const updateUserById = async (id: string, UserData: Partial<IUser>) => {
    return User.findByIdAndUpdate(id, UserData, { new: true });
};

export const deleteUserById = async (id: string) => {
    return User.findByIdAndDelete(id);
};

