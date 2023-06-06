import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Sign up or Log in to get organized!</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col md-4">
            <SignUpForm setUser={setUser}  />
          </div>
        </div>
      </div>              
      <div className="container">
        <div className="row">
          <div className="col md-4">
          <LoginForm setUser={setUser} />
          </div>
        </div>
      </div>   
    </main>
  );
}