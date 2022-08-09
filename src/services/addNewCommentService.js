import http from "./httpServices";

export default function addNewComment(data) {
  return http.post("/comments", data);
}
