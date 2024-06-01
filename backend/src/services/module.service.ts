import Module, { IModule } from '../models/course.model';

export const createModule = async (moduleData: IModule) => {
    const module = new Module(moduleData);
    return module.save();
};

export const findAllModules = async () => {
    return Module.find();
};

export const findModuleById = async (id: string) => {
    return Module.findById(id);
};

export const updateModuleById = async (id: string, moduleData: Partial<IModule>) => {
    return Module.findByIdAndUpdate(id, moduleData, { new: true });
};

export const deleteModuleById = async (id: string) => {
    return Module.findByIdAndDelete(id);
};

