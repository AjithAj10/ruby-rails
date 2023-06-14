import axios from "axios";
import React, { useEffect, useState } from "react";

function AllUsers() {
  useEffect(() => {
    fetchUsers();
  }, []);

  let fetchUsers = async () => {
    let data = await axios.get("https://ruby-rails.onrender.com/");
    setFormData(data.data);
  };

  const [formData, setFormData] = useState([]);
  return (
    <div>
      <h2>All users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>date of birth</th>
          </tr>
        </thead>
        <tbody>
          {formData &&
            formData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.dob}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
