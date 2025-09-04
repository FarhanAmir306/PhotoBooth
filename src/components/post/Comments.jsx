import { useState } from "react";

export default function Comments({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-3 mt-1 relative">
      {/* Open modal button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-500 text-sm hover:text-gray-700"
      >
        {`View all ${post?.commentsCount} comments`}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal box */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                All Comments {post?.comments?.length || 0}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Comments List */}
            {post?.comments?.length > 0 ? (

              <ul className="space-y-4">
                {post?.comments?.map((comment, index) => (
                  <li
                    key={index}
                    className="pb-3 last:border-b-0 flex items-start gap-2"
                  >
                    {/* Avatar (optional, fallback if not exist) */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                      <img
                        src={`http://localhost:3000/${comment?.user?.avatar}`}
                        // alt={comment.user}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Comment text */}
                    <div>
                      <span className="font-medium text-gray-800">
                        {/* {comment.user} */}
                      </span>
                      <p className="text-gray-700 text-sm mt-1">
                        {comment?.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No comments yet.</p>
            )}

           
          </div>
        </div>
      )}
    </div>
  );
}
