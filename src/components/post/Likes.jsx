export default function Likes({post}) {
  return (
    <div className="px-3">
      <div className="flex items-center">
        <div className="h-6 flex -space-x-2">
          {post.likes.map((like) => (
            <img
              key={like?._id}
              src={`http://localhost:3000/${like?.avatar}`}
              alt="User avatar"
              className="w-6 h-6 rounded-full"
            />
          ))}
        </div>
        <p className="text-sm ml-2">
          <span className="font-semibold">{post?.likesCount} likes</span>
        </p>
      </div>
    </div>
  );
}
