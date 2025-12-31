// utils.ts
export const BASE_URL = "http:10.190.34.114:9000/api/auth";

export interface StudentData {
  student_id: string;
  student_name: string;
  class_standard: string;
  password: string;
  school_id: string;
  teacher_id: string;
}

export interface ApiResponse {
  message?: string;
  sync_status?: boolean;
  error?: any;
}

export const registerStudentApi = async (
  studentData: StudentData
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    const data: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        (data.error as string) || "Student registration failed"
      );
    }

    return data; // { message: "...", sync_status: true/false }
  } catch (error: any) {
    console.error("Error registering student:", error.message);
    throw error;
  }
};
