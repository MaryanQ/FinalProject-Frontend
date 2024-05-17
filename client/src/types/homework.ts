export interface Homework {
  homework_id: number;
  course_id: number;
  student_id: number;
  assignment_name: string;
  description: string;
  due_date: Date;
  is_completed: boolean;
  completion_date?: Date; // Kan være valgfri, hvis lektien ikke er færdig
  grade?: string; // Kan være valgfri, hvis det ikke er bedømt endnu
}
