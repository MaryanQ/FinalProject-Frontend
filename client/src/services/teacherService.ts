import { API_URL } from "../../settings";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { Teacher } from "../types/teacher";

const BASE_URL = "http://localhost:4000";

const TEACHERS_URL = BASE_URL + "/teachers";

//It's an async function named getTeachers that returns a promise containing an array of Teacher objects.
export async function getTeachers(): Promise<Teacher[]> {
  //it makes a network request til teachers url, using fetch api
  //then hanfdlehttperrors sørger for at errors bliver fanget og handled.
  return fetch(TEACHERS_URL).then(handleHttpErrors);
}

//koloren : bliver brugt til at definere typer.

//): Promise<Teacher>  koloren angiver type teacher object.
export async function getTeacher(teacher_id: number): Promise<Teacher> {
  return fetch(`${TEACHERS_URL}/${teacher_id}`).then(handleHttpErrors);
}

export async function addTeacher(teacherData: Teacher): Promise<Teacher> {
  const options = makeOptions("POST", teacherData);
  return fetch(TEACHERS_URL, options).then(handleHttpErrors);
}
//async hvilket betyder at den vil retunere et promise. der vil give et teacher object

export async function updateTeacher(teacherData: Teacher): Promise<Teacher> {
  const options = makeOptions("PUT", teacherData);
  const url = `${TEACHERS_URL}/${teacherData.teacher_id}`;
  //dette konstruere urlen ved at tilføje teacherens id til min base url . det sikre at serveren opdatere den specifikke lærerer med den rette id
  return fetch(url, options).then(handleHttpErrors);
  //fetch: Laver en HTTP-anmodning til serveren ved hjælp af PUT-metoden og de specificerede muligheder.
  //url: URL'en er konstrueret til at målrette en bestemt lærer.
  //options: Anmodningsmulighederne inkluderer HTTP-metoden og de opdaterede lærerdata.
  //.then(handleHttpErrors): Svaret sendes til handleHttpErrors-funktionen, der sørger for, at fejl opfanges og håndteres korrekt.
}

export async function deleteTeacher(teacher_id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${TEACHERS_URL}/${teacher_id}`, options).then(handleHttpErrors);
}

//However, based on the error and related information, the makeOptions function is expecting two arguments: one for the HTTP method and another for the request body. This is typical for functions designed to handle HTTP requests where body data might be necessary, like for POST or PUT requests. Here's a general structure of such a function:

//For a DELETE request, typically, no body is required. If makeOptions is designed to require a second parameter even when it is not needed, you can pass null as a placeholder:
