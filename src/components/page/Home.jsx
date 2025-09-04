import { useEffect, useState } from "react";
import { actions } from "../../actions";
import { api } from "../../api";
import { usePost } from "../../hooks/usePost";
import Caption from "../post/caption";
import AddComment from "../post/AddComment";
import Likes from "../post/Likes";
import PostHeader from "../post/PostHeader";
import PostAction from "../post/PostAction";
import Comments from "../post/Comments";

export default function Home() {

  const { state, dispatch } = usePost();
  

  useEffect(() => {
    const GetAllPost = async () => {
      const response = await api.get(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/?page=1&limit=10`
      );

      if (response.status === 200) {
        dispatch({
          type: actions.post.POST_FETCHED,
          data: response.data,
        });
      }
    };

    GetAllPost();
  }, []);

  console.log(state.post);

  return (
    <>
      <div className="max-w-6xl mx-auto w-full py-10 ">
        <div>
          {/* Post 1 --> */}
          {state.posts.map((post) => (
            <article key={post?._id} className="border-b pb-4 mb-4 max-w-[560px] mx-auto border rounded-md relative ">
              {/* Post Header --> */}
              <PostHeader post={post} />

              {/* Post Image --> */}
              <div className="relative">
                <a href="./post-details.html">
                  <img
                    src={`http://localhost:3000/${post?.image}`}
                    alt="Post image"
                    className="w-full object-cover max-h-[1000px]"
                  />
                </a>
              </div>

              {/* Post Actions --> */}
              <PostAction/>

              {/* Likes --> */}
              <Likes post={post} />

              {/* Caption --> */}
              <Caption post={post} />

              {/* Comments --> */}
             <Comments post={post}/>

              {/* Add Comment --> */}
              <AddComment/>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
