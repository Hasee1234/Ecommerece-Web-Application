// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";

// const SignUpPage = ({ switchToLogin }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = (e) => {
//     // e.preventDefault();
//     // signup(formData);
//   };

//   return (
//     <div className="flex flex-col justify-center py-8 sm:px-6 lg:px-8">
//       <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className=" text-center text-3xl font-extrabold ">
//           Create your account
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium ">
//                 Full name
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 " aria-hidden="true" />
//                 </div>
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="block w-full px-3 py-2 pl-10  border border-gray-600 rounded-md shadow-sm
// 									 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   placeholder="your name"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium ">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 " aria-hidden="true" />
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   className=" block w-full px-3 py-2 pl-10  border border-gray-600 
// 									rounded-md shadow-sm
// 									 placeholder-gray-400 focus:outline-none focus:ring-blue-500 
// 									 focus:border-blue-500 sm:text-sm"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium ">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 " aria-hidden="true" />
//                 </div>
//                 <input
//                   id="password"
//                   type="password"
//                   required
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                   className=" block w-full px-3 py-2 pl-10  border border-gray-600 
// 									rounded-md shadow-sm placeholder-gray-400  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent 
// 							rounded-md shadow-sm text-sm font-medium text-white bg-blue-600
// 							 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
// 							  focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-50"
//               // disabled={loading}
//             >
//               {false ? (
//                 <>
//                   <Loader
//                     className="mr-2 h-5 w-5 animate-spin"
//                     aria-hidden="true"
//                   />
//                   Loading...
//                 </>
//               ) : (
//                 <>
//                   <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
//                   Sign up
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="mt-8 text-center text-sm text-gray-400">
//             Already have an account?{" "}
//             <span
//               onClick={switchToLogin}
//               className="font-medium cursor-pointer text-blue-400 hover:text-blue-300"
//             >
//               Login here <ArrowRight className="inline h-4 w-4" />
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SignUpPage;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { axiosInstance } from "../lib/axios";

const SignUpPage = ({ switchToLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const payload = {
      username: formData.name, // backend expects "username"
      email: formData.email,
      password: formData.password,
    };

    try {
      setLoading(true);
      console.log("Signup payload:", payload);
      const res = await axiosInstance.post("/auth/signup", payload);
      console.log("Signup response:", res?.status, res?.data);
      if (res.status === 201) {
        // If this component is rendered inside the modal dialog, switch to login form
        if (typeof switchToLogin === "function") {
          switchToLogin();
        } else {
          // fallback to navigate if used as a standalone page with a /login route
          navigate("/login");
        }
      } else {
        setError(`Unexpected response: ${res.status}`);
      }
    } catch (err) {
      console.error("Signup error:", err);
      const status = err?.response?.status;
      const data = err?.response?.data;
      const message = data?.message || (data ? JSON.stringify(data) : err.message) || "Signup failed";
      setError(`${status ? status + ": " : ""}${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-sm font-medium">Full name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5" />
              </div>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md"
                placeholder="Your name"
              />
            </div>

            <label className="block text-sm font-medium">Email address</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md"
                placeholder="you@example.com"
              />
            </div>

            <label className="block text-sm font-medium">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md"
                placeholder="••••••••"
              />
            </div>

            <label className="block text-sm font-medium">Confirm Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 rounded-md bg-blue-600 text-white"
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-5 w-5" />
                  Sign up
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account...?{" "}
            <span onClick={switchToLogin} className="font-medium cursor-pointer text-blue-400">
              Login here <ArrowRight className="inline h-4 w-4" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;