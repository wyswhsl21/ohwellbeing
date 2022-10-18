import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

//ohwell instance Api 추가# 사용법 ex)  const data = await ohwellApi.getTodo();
//사용 하다보면 익숙해질거에요 *^^*
export const ohwellApi = {
  getOhwell: () => instance.get("/ohwell"), //각각의 get,post,delete,patch입니다!
  getOhwells: (arg) => instance.get(`/ohwell/${arg}`), //각각의 get,post,delete,patch입니다!
  postOhwell: (ohwell) => instance.post("/ohwell", ohwell),
  deleteOhwell: (ohwellId) => instance.delete(`/ohwell/${ohwellId}`),
  patchOhwell: (ohwellId, payload) =>
    instance.patch(`/ohwell/${ohwellId}`, { memo: payload }),
};

export const dadatApi = {
  // getDadat: () => instance.get('/dadats'),
  postDadat: ({ ohwellId, dadat }) => {
    console.log(dadat);
    return instance.post(`/ohwell/${ohwellId}`, { dadats: dadat });
  },

  deleteDadat: (dadatId) => instance.delete(`/dadats/${dadatId}`),
  // 주소를 보내줌 -> 백엔드 라우터에서 주소를 받아준다
  // 바꿀 새로운 데이터를 보내주어야 한다(두번째 인자로 보내줌)
  patchDadat: ({ ohwellId, newComments }) =>
    instance.patch(`/ohwell/${ohwellId}`, { dadats: newComments }),
};
