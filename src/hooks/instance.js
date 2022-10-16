import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

//ohwell instance Api 추가# 사용법 ex)  const data = await ohwellApi.getTodo();
//사용 하다보면 익숙해질거에요 *^^*
export const ohwellApi = {
  getOhwell: () => instance.get("/ohwell"), //각각의 get,post,delete,patch입니다!
  postOhwell: (ohwell) => instance.post("/ohwell", ohwell),
  deleteOhwell: (ohwellId) => instance.delete(`/ohwell/${ohwellId}`),
  patchOhwell: (ohwellId, edit) => instance.patch(`/ohwell/${ohwellId}`, edit),
};