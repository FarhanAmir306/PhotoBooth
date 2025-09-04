import { useEffect } from "react";
import { actions } from "../../actions";
import { api } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import { Link } from "react-router";

export default function Profile() {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();
  const userId = auth?.user?._id;


  useEffect(() => {
    const ProfileFatching = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${userId}`
        );
        if (response.status === 200) {
          // console.log(response.data.user,'userdata');
          // console.log(response.data.posts,'userposts');
          dispatch({
            type: actions.profile.PROFILE_FETCHED,
            data: response.data,
            // posts:response.posts,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    ProfileFatching();




  }, [userId]);

  console.log(state,'profileState');
  console.log(state?.user,'userdata');
  console.log(state?.posts,'postsdata');
  

  return (
    <>
      <div className="main-container">
        <div className="profile-container">
          {/* <!-- Profile Header --> */}
          <div className="flex flex-col md:flex-row mb-10">
            {/* <!-- Profile Picture --> */}
            <div className="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
                <img
                  src={`http://localhost:3000/${state?.user?.avatar}`}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* <!-- Profile Info --> */}
            <div className="md:w-2/3">
              {/* <!-- Username and Buttons --> */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                <h2 className="text-xl font-normal mb-4 sm:mb-0 sm:mr-4">
                  {state?.user?.name}
                </h2>
              </div>
              <div className="flex space-x-2">
                <a
                  href="./edit-profile.html"
                  className="bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium"
                >
                  Edit profile
                </a>
              </div>

              {/* <!-- Stats --> */}
              <div className="flex justify-center sm:justify-start space-x-8 mb-4 mt-2">
                <div>
                  <span className="font-semibold">{state?.posts?.length}</span> posts
                </div>
              </div>

              {/* <!-- Bio --> */}
              <div className="text-sm">
                {state?.user?.bio ? <p>{state?.user?.bio}</p> :'Add your Bio'}
                <p className="text-blue-900">
                  <a
                    href="https://saadh393.github.io"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    {/* saadh393.github.io */}
                    {state?.user?.email ? <span>{state?.user?.email}</span> : 'Add your email'}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <section>
            <h3 className="font-semibold text-lg mb-4">Posts</h3>
            {/* <!-- Photo Grid --> */}
            <div className="grid grid-cols-3 gap-1">
              {/* <!-- Grid Item 1 --> */}
            {
              state?.posts?.map((post)=>(
                 <Link to="/post-details">
                <div key={post?._id} className="relative">
                  <img
                    src={`http://localhost:3000/${post?.image}`}
                    alt="Post"
                    className="w-full grid-image"
                  />
                </div>
              </Link>
              ))
            }

              
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
