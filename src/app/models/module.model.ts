import { Course } from './course.model';

export class Module {
  _id?: number;
  name: string | undefined;
  description: string | undefined;
  course: Course | undefined;
  isLock: any;
  img: any;
}
