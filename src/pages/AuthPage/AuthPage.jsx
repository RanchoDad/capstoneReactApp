import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1 className="title-page">Stay organized and focused with the Task Manager</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-container form-container-color">
              <LoginForm setUser={setUser} />
                    
          
              <SignUpForm setUser={setUser}  />
            </div>
          </div>
          <div className="col-sm-6 text-end">
            <div className="additional-element">
                this should be on the right side
            </div>
          </div>   
        </div>  
      </div>  
    </main>
  );
}