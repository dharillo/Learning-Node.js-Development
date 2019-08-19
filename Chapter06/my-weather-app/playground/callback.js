const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Vikram',
  };
  callback(user);
};

getUser(35, (user) => {
  console.log(user);
});
