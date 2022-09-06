const App = () => {
  const hobbyList = [
    { id: 1, name: "Chơi game" },
    { id: 2, name: "Đá bóng" },
    { id: 3, name: "Nghe nhạc" },
  ];

  const showInfo = (name) => {
    alert(name);
  };
  const user = {
    name: "Văn A",
    email: "techmaster@gmail.com",
    age: 25,
    add: "Việt Nam",
    status: true,
  };
  return (
    <React.Fragment>
      <Hobby hobbyList={hobbyList} />
      <User user={user} {...user} />
    </React.Fragment>
  );
};
//{...user} = name= {user.name} email = {user.email} age = {user.age}
const User = (props) => {
  console.log(props);
  const { name, email } = props.user;
  return (
    <div>
      <h2>Name: {name} </h2>
      <p>Email: {email}</p>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    add: PropTypes.string,
    status: PropTypes.boolean,
  }),
};
const Hobby = (props) => {
  const { hobbyList, showInfo } = props;
  return (
    <ul>
      {hobbyList.length > 0 &&
        hobbyList.map((hobby) => (
          <li key={hobby.id} onClick={() => showInfo(hobby.name)}>
            {hobby.name}
          </li>
        ))}
      {(hobbyList.length = 0 && <li>Không có sở thích</li>)}
    </ul>
  );
};
Hobby.propTypes = {
  hobbyList: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired,
};

Hobby.defaultProps = {
  hobbyList: [],
  showInfo: () => {
    alert("clicked");
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
