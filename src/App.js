import "./styles.scss";
//impoНrt "./form.scss";
//import "./list.scss";
//import "./variables.scss";
import React, { useState } from "react";
import ErrorMessage from "./errormessage";

export default function App() {
  const initUsers = [
    {
      name: "Alex",
      age: "21"
    }
  ];

  const [message, setMessage] = useState("");
  const [users, setUser] = useState(initUsers);

  const errorHeandle = (str) => {
    setMessage((message) => {
      return str;
    });
  };

  const onGetUser = (someObject) => {
    setUser((users) => {
      return [someObject, ...users];
    });
    console.log("someObject", someObject);
  };

  const errorMessage = message ? (
    <ErrorMessage handleModal={errorHeandle} message={message} />
  ) : null;

  return (
    <div className="app">
      <div className="app__main">
        <Inputform onGetUser={onGetUser} errorHeandle={errorHeandle} />
        <RanderUsers users={users} />
      </div>
      <div className="app__error">{errorMessage}</div>
    </div>
  );
}
//********************************************* */

const Inputform = (props) => {
  //  const newUser = {};

  const [newName, setName] = useState("");
  const [newAge, setAge] = useState("");
  const { onGetUser, errorHeandle } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/\d/.test(newName)) {
      errorHeandle('некорректный ввод. В поле "Имя" не должно быть цифр');
      return;
    }

    if (newName && newAge) {
      onGetUser({ name: newName, age: newAge });
      setName("");
      setAge("");
      return;
    }

    errorHeandle('Строки "Имя" и "Возраст" не должны быть пустыми');

    //console.log("ss");
  };

  function onInput(e) {
    if (e.target.name === "name") {
      setName((newName) => e.target.value.trim());
    }
    if (e.target.name === "age") {
      setAge((newAge) => e.target.value.trim());
    }
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <legend className="form__title">Имя и возраст</legend>
        <div htmlFor="name" className="form__lable">
          Имя
        </div>
        <input
          onChange={onInput}
          id="name"
          className="form__name"
          name="name"
          value={newName}
          title="Введите имя и возраст"
          type="text"
          placeholder="Введите имя"
        />
        <div htmlFor="age" className="form__lable">
          Возраст
        </div>

        <input
          onChange={onInput}
          className="form__age"
          id="age"
          value={newAge}
          name="age"
          type="number"
          placeholder="Введите возраст"
        />
        <button className="form__botton">Сохранить</button>
      </form>
    </div>
  );
};

const RanderUsers = (props) => {
  const { users } = props;
  console.log("array users: ", users);
  const userList = users.map((user, i) => {
    return (
      <div key={i} className="list__item">
        Имя: {user.name} --- возраст {user.age}
      </div>
    );
  });

  return <div className="list">{userList}</div>;
};
