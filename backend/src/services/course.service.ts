import Course, { ICourse } from '../models/course.model';

export const createCourse = async (courseData: ICourse) => {
    const course = new Course(courseData);
    return course.save();
};

export const findAllCourses = async () => {
    return Course.find().populate('modules');
};

export const findCourseById = async (id: string) => {
    return Course.findById(id).populate('modules');
};

export const updateCourseById = async (id: string, courseData: Partial<ICourse>) => {
    return Course.findByIdAndUpdate(id, courseData, { new: true });
};

export const deleteCourseById = async (id: string) => {
    return Course.findByIdAndDelete(id);
};

