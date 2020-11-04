
import React, { useContext, useState, useEffect } from "react"
import AuthContext from "../../context/auth/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Register= () =>{
  const authContext = useContext(AuthContext)
  const {register,error}= authContext
  useEffect(
    () => {
       if (error === `User with this email ${email} already exists`) {
        alert (error)
      }
      //eslint-disable-next-line
    },
    );

 const [user, setUser]= useState({
   name:"",
   email:"",
   password:"",
   rePassword:""
})

 const {name, email, password, rePassword} = user
 const onChange = (event) => setUser({...user, [event.target.name]: event.target.value})

 const onSubmit= (event) => {
   event.preventDefault();
   if(name=== "" || email=== "" || password=== ""){
     alert("Please enter all the fields")
   }else if (password !== rePassword){
     alert("Password do not match")
   }else{
     register({
      name,
      email,
      password
     })
     
   }
 }
 const [passwordShown, setPasswordShown] = useState(false)

 const togglePasswordVisibility = () => {
   setPasswordShown(passwordShown? false: true)
 }
return(
      <form onSubmit={onSubmit} >
        <div className="container">
           <h1>
             Account Register
           </h1>
           <lable htmlFor="name">UserName</lable>
           <input type="text" placeholder="Enter userName" name="name" value={name} onChange={onChange}/>
         
           <lable htmlFor="email">Email Address</lable>
           <input type="text" placeholder="Enter Email" name="email" value={email} onChange={onChange}/>
           <div className="pass-wrapper">
           <lable htmlFor="Password">Password</lable>
           <input
              type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={password} onChange={onChange}
           />
            <i onClick= {togglePasswordVisibility}>{eye} </i>
            </div>
           <lable htmlFor="rePassword">Confirm Password</lable>
           <input
            type="password"
            placeholder="Confirm Password"
            name="rePassword"
            value={rePassword} onChange={onChange}
            />
           <input
           type="submit"
           value="Register"
           className="registerbtn"
         />
         <div class="container signin">
          <p>Already have an account? <a href="!#">Sign in</a>.</p>
        </div>
      </div>
  </form>
  
);
}
export default Register
