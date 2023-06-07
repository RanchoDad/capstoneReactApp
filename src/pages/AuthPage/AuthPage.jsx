import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Sign up or Log in to get organized!</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SignUpForm setUser={setUser}  />
          </div>
        </div>
      </div>              
      <div className="container">
        <div className="row">
          <div className="col-sm">
          <LoginForm setUser={setUser} />
          </div>
        </div>
      </div>   
    </main>
  );
}