import http from "./httpServices";

export default function getComments() {
  return http.get("/comments");
}
