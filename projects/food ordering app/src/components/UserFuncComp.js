import React, { useEffect, useState } from "react";

const UserFuncComp = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const { name, email, location, mobile } = props.data;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    //* we use "return a function" for clean up the things like setInterval
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Functional Component</h2>
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{location}</td>
            <td>{mobile}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserFuncComp;
