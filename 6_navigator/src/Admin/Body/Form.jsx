import React,{ useRef } from 'react'
import { base_url, post_user } from '../../constant';
import { add_data } from '../../api/api';

const Form = () => {

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const addUser = async() =>{
    let user = {
      name: name.current.value,
      email :email.current.value,
      password:password.current.value,
    };
    console.log(user);

    await add_data(base_url,post_user,user);
  }


  return (
    <div>
      <div class="card mt-2" style={{width : '18rem'}}>
        <div class="card-body">
        <div class="form-group">
          <label for="email"> Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            ref={name}
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="password"
            placeholder="Enter password"
            ref={password}
          />
        </div>

        <button type="submit" class="btn btn-primary mt-2" onClick={addUser} >
          Submit
        </button>
        </div>
      </div>
    </div>
  )
}

export default Form
