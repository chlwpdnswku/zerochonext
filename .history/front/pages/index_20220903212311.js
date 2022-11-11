import Head from 'next/head';
import AppLayout from '../components/AppLayout';
// 리덕스
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// PostForm 과 PostCard
function index() {
  // 로그인 한사람한테만 보이기
  const { isLoggedIn } = useSelector((state) => state.user);
  // 포스트안에있는 게시물들을 불어오기
  const { mainPosts } = useSelector((state) => state.post);

  // 큰컴포넌트부터 시작을해서 작은컴포넌트로 가는거임
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {/*index 를 key로 쓰지말자! id 고유한값을 준다*/}
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </AppLayout>
  );
}

export default index;
