import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { CourseStudent } from "../types/courseStudent";

const BASE_URL = "http://localhost:4000";

const COURSESTUDENT_URL = BASE_URL + "/courseStudents";

// Fetch all students in a specific course

// Fetch all courses for a specific student
export async function getCoursesByStudent(
  student_id: number
): Promise<CourseStudent[]> {
  return fetch(`${COURSESTUDENT_URL}?student_id=${student_id}`).then(
    handleHttpErrors
  );
}

// Add a student to a course
export async function addStudentToCourse(
  courseStudentData: CourseStudent
): Promise<CourseStudent> {
  const options = makeOptions("POST", courseStudentData);
  return fetch(COURSESTUDENT_URL, options).then(handleHttpErrors);
}

// Remove a student from a course
export async function removeStudentFromCourse(
  course_id: number,
  student_id: number
): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(
    `${COURSESTUDENT_URL}/courses/${course_id}/student/${student_id}`,
    options
  ).then(handleHttpErrors);
}
