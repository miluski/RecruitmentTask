import { axiosInstance } from "./axiosInstance";

export async function handleLogoutButtonPress(navigate: any): Promise<void> {
  const response = await axiosInstance.post("/api/auth/user/logout", {
    withCredentials: true,
  });
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userCredentials");
  response.status === 200
    ? navigate("/")
    : alert("Wystąpił błąd przy próbie wylogowania. Spróbuj ponownie później!");
}