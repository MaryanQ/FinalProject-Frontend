import { API_URL } from "../../settings";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { CourseTeacher } from "../types/courseTeacher";

const BASE_URL = "http://localhost:4000";

const COURSETEACHER_URL = BASE_URL + "/courseTeachers";

// Fetch all teachers in a specific course
export async function getTeachersByCourse(
  course_id: number
): Promise<CourseTeacher[]> {
  return fetch(`${COURSETEACHER_URL}/course/${course_id}`).then(
    handleHttpErrors
  );
}

// Fetch all courses for a specific teacher
export async function getCoursesByTeacher(
  teacher_id: number
): Promise<CourseTeacher[]> {
  return fetch(`${COURSETEACHER_URL}/teacher/${teacher_id}`).then(
    handleHttpErrors
  );
}

// Add a teacher to a course
export async function addTeacherToCourse(
  courseTeacherData: CourseTeacher
): Promise<CourseTeacher> {
  const options = makeOptions("POST", courseTeacherData);
  return fetch(COURSETEACHER_URL, options).then(handleHttpErrors);
}

// Remove a teacher from a course
export async function removeTeacherFromCourse(
  course_id: number,
  teacher_id: number
): Promise<void> {
  const options = makeOptions("DELETE", null); // Adjust as needed for your server's DELETE handling
  return fetch(
    `${COURSETEACHER_URL}/course/${course_id}/teacher/${teacher_id}`,
    options
  ).then(handleHttpErrors);
}
