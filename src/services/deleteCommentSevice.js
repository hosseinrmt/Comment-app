import http from "./httpServices";

export default function deleteComment(data) {
  return http.delete(`/comments/${data}`);
}
