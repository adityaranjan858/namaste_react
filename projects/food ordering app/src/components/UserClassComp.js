import React from "react";

class UserClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Name",
      },
      // count: 0,
      //   count2: 2,
    };

    // console.log("Child Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adityaranjan858");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    // console.log(json);
    // console.log("Child component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count !== prevState.count){
    // }
    // console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(
      "Component will unmounted called just before the component is removed from the DOM. "
    );
  }
  render() {
    // destructure under the render method
    const { email, location, mobile } = this.props.data;
    // const { count, count2 } = this.state;
    // console.log("Child render");
    // console.log(this.state.userInfo);
    const { name, avatar_url } = this.state.userInfo;

    const incrementHandler = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    return (
      <div>
        <h2>Class Component</h2>
        {/* <div className="d-flex justify-content-around align-items-center">
          <div className="my-3">
            <h3>Count : {count}</h3>
            <h3>Count2 : {count2}</h3>
          </div>
          <div>
            <button type="submit" onClick={incrementHandler}>
              Increase
            </button>
          </div>
        </div> */}
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td className="w-25 h-25">
                <img src={avatar_url} className="w-25 h-25" alt="" />
              </td>
              <td>{name}</td>
              <td>{location}</td>
              <td>{mobile}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserClassComp;
