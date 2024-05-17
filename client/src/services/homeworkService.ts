import { API_URL } from "../../settings";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { Homework } from "../types/homework";

const BASE_URL = "http://localhost:4000";

const HOMEWORK_URL = `${BASE_URL}/homework`;

// Retrieve all homework assignments
export async function getAllHomework(): Promise<Homework[]> {
  return fetch(HOMEWORK_URL).then(handleHttpErrors);
}

// Retrieve a specific homework assignment by ID
export async function getHomework(homework_id: number): Promise<Homework> {
  return fetch(`${HOMEWORK_URL}/${homework_id}`).then(handleHttpErrors);
}

// Add a new homework assignment
export async function addHomework(homeworkData: Homework): Promise<Homework> {
  const options = makeOptions("POST", homeworkData);
  return fetch(HOMEWORK_URL, options).then(handleHttpErrors);
}

// Update an existing homework assignment
export async function updateHomework(
  homeworkData: Homework
): Promise<Homework> {
  const options = makeOptions("PUT", homeworkData);
  const url = `${HOMEWORK_URL}/${homeworkData.homework_id}`;
  return fetch(url, options).then(handleHttpErrors);
}

// Delete a homework assignment by ID
export async function deleteHomework(homework_id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${HOMEWORK_URL}/${homework_id}`, options).then(
    handleHttpErrors
  );
}
