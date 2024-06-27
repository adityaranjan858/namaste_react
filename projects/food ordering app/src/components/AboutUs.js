import { Component } from "react";
import UserClassComp from "./UserClassComp";
import UserFuncComp from "./UserFuncComp";

//! This is functional component
// const AboutUs = () => {
//   const values = {
//     name: "Aditya Ranjan",
//     location: "Remote",
//     email: "test@test.com",
//     mobile: "91xxxxxxxx",
//   };
//   return (
//     <>
//       <div className=" container text-center">
//         <h1 className="display-3">About Us</h1>
//         <div className="mt-5">
//           <h2>Welcome to My Food Delivery App</h2>
//         </div>
//         <div className="mt-5">
//           {/* <UserFuncComp data={values} /> */}
//           <UserClassComp data={values} />
//         </div>
//       </div>
//     </>
//   );
// };

// ! this is class based component
class AboutUs extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }
  render() {
    // console.log("Parent render");
    const values = {
      name: "Aditya Ranjan",
      location: "Remote",
      email: "test@test.com",
      mobile: "91xxxxxxxx",
    };
    return (
      <>
        <div className=" container text-center">
          <h1 className="display-3">About Us</h1>
          <div className="mt-5">
            <h2>Welcome to My Food Delivery App</h2>
          </div>
          <div className="mt-5">
            {/* <UserFuncComp data={values} /> */}
            <UserClassComp data={values} />
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
