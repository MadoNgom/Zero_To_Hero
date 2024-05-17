import { CourseSchema, ICourse } from '../schemas/old.course.schema';

export class CourseService {

    /**
     * Create a new course
     * @param courseData Data for the new course
     * @returns The saved course document
     */
    async createCourse(courseData: ICourse): Promise<ICourse> {
        const course = new CourseSchema(courseData);
        return course.save();
    }

    /**
     * Retrieve all courses
     * @returns An array of all courses
     */
    async getAllCourses(): Promise<ICourse[]> {
        return CourseSchema.find();
    }

    /**
     * Retrieve a single course by its ID
     * @param courseId The ID of the course to retrieve
     * @returns The course document
     */
    async getCourseById(courseId: string): Promise<ICourse | null> {
        return CourseSchema.findById(courseId);
    }

    /**
     * Update a course by its ID
     * @param courseId The ID of the course to update
     * @param updateData The data to update the course with
     * @returns The updated course document
     */
    async updateCourse(courseId: string, updateData: Partial<ICourse>): Promise<ICourse | null> {
        return CourseSchema.findByIdAndUpdate(courseId, updateData, { new: true });
    }

    /**
     * Delete a course by its ID
     * @param courseId The ID of the course to delete
     * @returns The deleted course document
     */
    async deleteCourse(courseId: string): Promise<ICourse | null> {
        return CourseSchema.findByIdAndDelete(courseId);
    }
}
