import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const Users = () => {
  const [authUser] = useAuthState(auth);
  const [role, setRole] = useState("");
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

  //----------------------------------------

  useEffect(() => {
    users?.forEach((user) => {
      if (user.email === authUser.email) {
        setRole(user.role);
      }
    });
  }, [users, authUser]);

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

  //--------------------------------

  if (isLoading) {
    return;
  }

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
              {role === "admin" ? (
                <>
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
                </>
              ) : (
                <>
                  <td>-------</td>
                  <td>-------</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
