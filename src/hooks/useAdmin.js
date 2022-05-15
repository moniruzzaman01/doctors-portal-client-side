import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setLoading(false);
        });
    }
  }, [user]);
  return [admin, loading];
};

export default useAdmin;
