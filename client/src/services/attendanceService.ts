import { API_URL } from "../../settings";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { Attendance } from "../types/attendance";

const BASE_URL = "http://localhost:4000";

const ATTENDANCE_URL = `${BASE_URL}/attendance`;

// Retrieve all attendance records
export async function getAllAttendance(): Promise<Attendance[]> {
  return fetch(ATTENDANCE_URL).then(handleHttpErrors);
}

// Retrieve a specific attendance record by ID
export async function getAttendance(
  attendance_id: number
): Promise<Attendance> {
  return fetch(`${ATTENDANCE_URL}/${attendance_id}`).then(handleHttpErrors);
}

// Add a new attendance record
export async function addAttendance(
  attendanceData: Attendance
): Promise<Attendance> {
  const options = makeOptions("POST", attendanceData);
  return fetch(ATTENDANCE_URL, options).then(handleHttpErrors);
}

// Update an existing attendance record
export async function updateAttendance(
  attendanceData: Attendance
): Promise<Attendance> {
  const options = makeOptions("PUT", attendanceData);
  const url = `${ATTENDANCE_URL}/${attendanceData.attendance_id}`;
  return fetch(url, options).then(handleHttpErrors);
}

// Delete an attendance record by ID
export async function deleteAttendance(attendance_id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${ATTENDANCE_URL}/${attendance_id}`, options).then(
    handleHttpErrors
  );
}
