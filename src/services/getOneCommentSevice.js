import http from "./httpServices";

export default function getOneComment(data) {
  return http.get(`/comments/${data}`);
}
