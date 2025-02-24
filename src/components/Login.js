import { useState } from "react"
import { useNavigate } from "react-router-dom"
import users from '../DB/users'

function Login() {
  const navigate = useNavigate()
  const [err, setErr] = useState(null)
  function validateUser(e) {
    e.preventDefault();
    const user = document.getElementById('UserName').value
    const password = document.getElementById('Password').value
    let user_found = false
    let password_true = false
    users.forEach((item, index) => {
      if (user == item.username) {
        if (password == item.password) {
          password_true = true
          console.log('logined')
          setErr(null)
          localStorage.setItem('user',user)
          navigate('/home')
          window.location.reload();
        }
        user_found = true
      }

    })

    if (user_found && !password_true)
      setErr('invalid password')
    else if (!user_found)
      setErr('invalid UserName')
  }

  return (
    <section className="vh-100"  style={{'backgroundColor':'#EDE8F5'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100" >
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

            <div data-mdb-input-init className="form-outline mb-4">
              <h1 align='center'>Login</h1>
              <div class="text-danger">
               {err}
              </div>
            </div>
            <form>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="UserName" className="form-control form-control-lg" />
                <label className="form-label" for="form1Example13">UserName</label>
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <input type="Password" id="Password" className="form-control form-control-lg" />
                <label className="form-label" for="form1Example23">Password</label>
              {/* <div class="text-danger">
                Please enter a message in the textarea.
              </div> */}
          </div>


          <div className="d-flex justify-content-around align-items-center mb-4">

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>


          <button onClick={(event) => { validateUser(event) }} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Sign in</button>

          {/* <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
  
            <a data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style={{"backgroundColor": "#3b5998"}} href="#!"
              role="button">
              <i className="fab fa-facebook-f me-1"/>Continue with Facebook
            </a>
            <a data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style={{"backgroundColor":" #55acee"}} href="#!"
              role="button">
              <i className="fab fa-twitter me-2" > </i> Continue with Twitter</a> */}

        </form>
      </div>
    </div>
    </div >
  </section >
  )
}
export default Login