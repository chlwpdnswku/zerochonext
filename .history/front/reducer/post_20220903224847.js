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
  //이미지를 업로드할때 저장공간
  imagePaths: [],
  //   게시글추가가 완료될때
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

// 게시글작성 이렇게 변수 설정해줘야 오타발생안함
const ADD_POST = 'ADD_POST';

export const addPost = { type: ADD_POST };

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,

        // 그니까 더미 포스트가 1 번이고 아래는 메인 포스트로 지정을함
        // 사진에 대한 댓글임이거
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};
export default reducer;
