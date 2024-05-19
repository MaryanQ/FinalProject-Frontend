import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { Course } from "../types/course";

const BASE_URL = "http://localhost:4000";

const COURSES_URL = BASE_URL + "/courses";

export async function getCourses(): Promise<Course[]> {
  return fetch(COURSES_URL).then(handleHttpErrors);
}

export async function getCourse(course_id: number): Promise<Course> {
  return fetch(`${COURSES_URL}/${course_id}`).then(handleHttpErrors);
}

export async function addCourse(courseData: Course): Promise<Course> {
  const options = makeOptions("POST", courseData);
  return fetch(COURSES_URL, options).then(handleHttpErrors);
}

export async function updateCourse(courseData: Course): Promise<Course> {
  const options = makeOptions("PUT", courseData);
  const url = `${COURSES_URL}/${courseData.course_id}`;
  return fetch(url, options).then(handleHttpErrors);
}

export async function deleteCourse(course_id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${COURSES_URL}/${course_id}`, options).then(handleHttpErrors);
}
