// 가짜데이터 넣기

export const initialState = {
  mainPosts: [
    {
      id: 1,
      // 다른정보들과 합쳐서 주면은 앞에있는 게 대문자가됨
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
