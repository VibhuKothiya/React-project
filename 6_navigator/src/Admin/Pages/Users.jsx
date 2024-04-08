import React, {useState, useEffect}from 'react'
import Form from '../Body/Form'
import Table from '../Body/Table'
import { get_data } from "../../api/api";
import { base_url, get_user } from "../../constant";

const Users = () => {
  const [data, setdata] = useState([]);

  let get_user_data = async () => {
    let res = await get_data(base_url, get_user);
    console.log(res);
    setdata(res.data);
  };

  useEffect(() => {
    get_user_data();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8">
        <Table data={data} />
      </div>
      <div className="col-md-4">
        <Form />
      </div>
    </div>
  )
}

export default Users;
