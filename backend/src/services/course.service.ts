import Course, { ICourse } from '../models/course.model';
import Module, { IModule } from '../models/module.model';


export const createCourse = async (courseData: ICourse) => {
  const course = new Course(courseData);
  return course.save();
};

export const findAllCourses = async () => {
  return await Course.find().populate('formateur');
};

export const findCourseById = async (id: string) => {
  return Course.findById(id).populate('formateur');
};

export const updateCourseById = async (id: string, courseData: Partial<ICourse>) => {
  console.log(courseData);
  if (courseData.modules) {
    return Course.findByIdAndUpdate(
      id,
      {
        $push: { modules: { $each: courseData.modules } }
      },
      { new: true }
    );
  } else {
    return Course.findByIdAndUpdate(id, courseData, { new: true });
  }
};

export const deleteCourseById = async (id: string) => {
  return Course.findByIdAndDelete(id);
};

export const createModule = async (moduleData: IModule) => {
  const module = new Module(moduleData);
  return module.save();
};
