import React, {useState} from 'react'
import './Login.css'




const LoginForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loginData, setLoginData] = useState();   

    const [error, setError] = useState(''); 

    const handleLogin = (e) =>{
    // Check if email or password fields are blank
        if(email.length === 0 || password.length === 0){
            setError('please enter details');
            return;
        }

    // Perform validation
  
        if (email === 'vibhuti@gmail.com' && password === '123456') {
            setIsLoggedIn(true);
            window.location.href = '/ProductsPage/Cards';
        } else {
            setError('Invalid email or password');
        }
        
    }
    

    const submitHandle = (e) =>{
            e.preventDefault();          
            
    }
    
    return (
        <>
            <div class="content">
                <div class="text">Login</div>
                <form onSubmit={submitHandle}>                
                                   
                    <div class="field">
                        <span class="fas fa-user"></span>
                        <input type="text" placeholder='Email or Phone' 
                        autoComplete='off' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                                                
                    </div>
                    <div class="field">
                        <span class="fas fa-lock"></span>
                        <input type="password" placeholder='Password' 
                        autoComplete='off' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>                                
                        
                    </div>
                    <div class="forgot-pass"><a href="#">Forgot Password?</a></div>
                    <button onClick={handleLogin}  className="submit">Log in</button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}

                    <button className="submit" >Sign Up</button>

                </form>
            </div>
        </>
    )
}

export default LoginForm;
