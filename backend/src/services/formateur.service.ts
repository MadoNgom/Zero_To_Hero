import Formateur, { IFormateur } from '../models/formateur.model';

export const createFormateur = async (data: IFormateur) => {
    const formateur = new Formateur(data);
    return formateur.save();
};

export const findAllFormateurs = async () => {
    return Formateur.find();
};

export const findFormateurById = async (id: string) => {
    return Formateur.findById(id);
};

export const updateFormateur = async (id: string, data: Partial<IFormateur>) => {
    return Formateur.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFormateur = async (id: string) => {
    return Formateur.findByIdAndDelete(id);
};

