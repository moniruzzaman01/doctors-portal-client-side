import React from "react";
import { useQuery } from "react-query";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //------------------------------------

  if (isLoading) {
    return;
  }

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/makeAdmin/${email}`, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const deleteUser = (email) => {
    fetch(`http://localhost:5000/user/delete/${email}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">Users</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th colSpan="3">Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u, key) => (
            <tr key={key}>
              <th>{key + 1}</th>
              <td>{u.email}</td>
              <td>
                {u.role !== "admin" && (
                  <button
                    onClick={() => makeAdmin(u.email)}
                    className="btn btn-xs"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => deleteUser(u.email)}
                  className="btn btn-xs"
                >
                  Remove User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
