import http from "./httpServices";

export default function addNewComment(data) {
  const token = "SECURE TEST TOKEN !";
  const header = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
