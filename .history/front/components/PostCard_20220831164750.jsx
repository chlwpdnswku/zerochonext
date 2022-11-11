import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import { it } from 'node:test';

// 처음에 구상을 좀 잘해야됨
function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    //
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((a) => !a);
  }, []);
  // 아이디가 있나없나 확인하는 용도임
  const id = useSelector((state) => state.user.me?.id);
  // 로그인을 한 상태면? 옵셔널 체이닝 me.id가있으면 id에들어가고 없으면 undifined로 바꿔 해주는 방식 위에꺼랑 합침그냥
  // const id = me?.id;
  console.log(post);
  return (
    <div style={{ marginBottom: 20 }}>
      {/* image가 존재를하면  이미지 안에 배열을 확인을 함? */}
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열엔에 jsx는 ket값을 넣어주야됨
        actions={[
          <RetweetOutlined key='retweet' />,
          liked ? (
            <HeartTwoTone
              twoToneColor='#eb2f96'
              key='heart'
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key='heart' onClick={onToggleLike} />
          ),
          <MessageOutlined key='comment' onClick={onToggleComment} />,
          //더보기 버튼 content를 넣어 더보기가 뭐라뜰지 알게함
          <Popover
            key='more'
            content={
              <Button.Group>
                {/* 내가쓴글 vs 남들이 쓴글   */}
                {/* 내아이디와 post 의 작성자의 아이디  User.id 의정보  가 나랑같으면 ? */}
                {id && post.User.id == id ? (
                  <>
                    <Button>수정</Button>
                    <Button type='danger'>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        {/* 카드처럼 나의정보들을 구현 */}
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
        <Button></Button>
      </Card>
      {/*  */}
      {commentFormOpened && (
        <>
          <CommentForm />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={(item) => (
            //   <li>
            //     {/* post.Comments가 각자 하나 아이템으로 들어간다 */}
            //     <Comment
            //       author={item.User.nickname}
            //       avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
            //       content={item.content}
            //     ></Comment>
            //   </li>
            // )}
          />
        </>
      )}
    </div>
  );
}
// shape는 더 자세하게 하기 위함! post에있는 reducer의 propstype 들을 선언
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard;
