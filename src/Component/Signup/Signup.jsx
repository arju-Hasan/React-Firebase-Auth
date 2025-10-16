// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
// import { auth } from '../../Firebase/Firebase.init';

const Signup = () => {
  const { createUser } = use(AuthContext);
  console.log("signup", createUser);

  const handleSubmit = (e) => {
    e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
         createUser(email, password)
          .then(() => {
            console.log('User signed up successfully');
          })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
      });
  }

  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Signup now!</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
            {/* email field */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            {/* password field */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>

            <button className="btn btn-neutral mt-4">Signup</button>
          </fieldset>
        </form>
      </div>
      <p className='text-center'>Already Have an account? Please login <Link className='text-blue-500 hover:text-blue-800' to="/login">here</Link></p>
    </div>

  );
};

export default Signup;
