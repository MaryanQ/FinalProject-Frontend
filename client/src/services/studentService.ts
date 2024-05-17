import { makeOptions, handleHttpErrors } from "../services/fetchUtils";
import { Student } from "../types/student.js";
import { getCoursesByStudent } from "./courseStudent";

const BASE_URL = "http://localhost:4000";

const STUDENTS_URL = BASE_URL + "/students";

//the async keyword is used before a fuction declaration to indicate the fuction will work asynchronously.
//hvilket betyder at vi kan skrive coder der ikke blokere andre opgaver.
//fx hvis et netværk req tager 2 sekunder, så venter mit program ikke.
//Asynchronous programming enables programs to handle multiple tasks concurrently,

export async function getStudents(): Promise<Student[]> {
  return fetch(STUDENTS_URL).then(handleHttpErrors);
}
export async function getStudentsWithCourses() {
  try {
    const students = await getStudents();
    const studentsWithCourses = await Promise.all(
      students.map(async (student) => {
        try {
          const courses = await getCoursesByStudent(student.student_id);
          console.log(`Courses for student ${student.student_id}:`, courses); // Debugging log
          return { ...student, courses };
        } catch (error) {
          console.error(
            "Error fetching courses for student ID:",
            student.student_id,
            error
          );
          return { ...student, courses: [] }; // Return student with no courses in case of an error
        }
      })
    );
    return studentsWithCourses;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error; // Or handle it more gracefully depending on your application needs
  }
}
//the getstydents fuction is marked as async.
//så når vi kalder på fuctionen, så returner den med det samme en promise.

//return fetch(STUDENTS_URL).then(handleHttpErrors);
//fetch initiater et netværk request to student_url.
//then (handleHttpErrors), søger for at det returnede data har vlret igennem error handling.
//hvis den var succesful, får vi vores forventede array af students
//ellers for vi et error,

// (): Promise<Student[]>
//den her del er return type of the fuction. The return type Promise<Student[]> provides a guarantee that the function will return a promise resolving to an array of Student objects.
//promise: rpresentere en value der that bliver availibe i fremtiden. (succesdully or with an error)
//Student[]: hvis the promise er succesfull, så vil valuen være array af students

//SUMARRY: getStudent retrieves data for a specific student from a server endpoint, ensuring proper error handling during the fetch operation.
// It's an async function named getStudent that accepts a student_id as a parameter and returns a promise that resolves to a Student object.
export async function getStudent(student_id: number): Promise<Student> {
  //Fetch Request: It makes a network request to STUDENTS_URL with the student_id appended to the URL to request data for that specific student.
  return fetch(`${STUDENTS_URL}/${student_id}`).then(handleHttpErrors);
}

export async function addStudent(studentData: Student): Promise<Student> {
  const options = makeOptions("POST", studentData);
  //makeOptions er en hjælpefunction, der skaber et sæt indstillinger til fetch
  //post http-metoden til at tilføje nye data.
  //studentdata "body delen af anmodningen." indholder data om den nye studerende, som er konveret til JSON via makeuptions.
  return fetch(STUDENTS_URL, options).then(handleHttpErrors);
  //då bruger vi fetch til at sende anmodning til serveren ved hjælp af "POST metoden".
}

export async function updateStudent(studentData: Student): Promise<Student> {
  const options = makeOptions("PUT", studentData);
  const url = `${STUDENTS_URL}/${studentData.student_id}`;
  return fetch(url, options).then(handleHttpErrors);
}
//Promise<void> Funktionen returnerer et Promise, der ikke indeholder nogen data (void), men angiver, om sletningen var succesfuld eller ej.
//void betyder at functionen ikke returnere et resultat, men blot indikere, om oprationen lykkedes eller ej.
export async function deleteStudent(student_id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${STUDENTS_URL}/${student_id}`, options).then(handleHttpErrors);
}
