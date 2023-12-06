export default interface Alumno {
  name: string;
  profile: 'developer' | 'IT' | 'end user';
  gender: 'male' | 'female' | 'other';
}


export interface Enrollment {
  studentId: number;
  courseId: number;
  enrollmentDate: Date;
  enrolledBy: number;
}


