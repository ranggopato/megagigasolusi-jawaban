export const onAdd = async (name, email) => {
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 201) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      setUsers((users) => [...users, data]);
    })
    .catch((error) => console.log(error));
};

export const onEdit = async (id, name, email) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      // setUsers((users) => [...users, data]);
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          user.name = name;
          user.email = email;
        }

        return user;
      });

      setUsers((users) => updatedUsers);
    })
    .catch((error) => console.log(error));
};

export const onDelete = async (id) => {
  await fetch(`/api/books/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        );
      }
    })
    .catch((error) => console.log(error));
};

export const getData = async (token) => {
  await fetch(
    "/api/books?" +
      new URLSearchParams({
        limit: 23,
        offset: 1,
      }),
    {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${token}`,
      },
      credentials: "include",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      setBooks(data.data);
      console.log(books);
    })
    .catch((error) => console.log(error));
};
