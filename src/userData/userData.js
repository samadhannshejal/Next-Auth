export const users = [
    {
      email: "samadhannshejal99@gmail.com",
      password: "password"
    },
    {
      email: "alex@email.com",
      password: "password"
    },
    {
      email: "bob@email.com",
      password: "password"
    }
  ]
  
  export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email);
    return found;
  }