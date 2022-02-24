import React from "react";
import NavigationBar from "../components/NavigatiionBar.jsx";
import { useState } from "react";
import Step2 from "../components/Form/Step2";
import Landingpage from "./Landingpage.js";
import Form from "../components/Form/Form.jsx";

const MainScreen = (props) => {
  const [formData, SetFormData] = useState({
    age: 0,
    gender: "",
    beachTime: false,
    lakeTime: false,
    parties: false,
    homeTime: false,
    envFocusBrands : false,
    activities: "",
    livingArea: "",
    state: ""
  })

  // main  page input chek function and passing props to typicalinput component

  const [userAge, setUserAge] = useState(0);
  const newUserAge = parseInt(userAge, 10)
  const mainPageinputChek = () =>{
    if (newUserAge === 0){
        setPage(1)
    }else if(newUserAge >= 1){
        setPage(2)
    }
}
//  page display function to chek which component is rendered

const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <Landingpage  data2={setUserAge} data={mainPageinputChek} />;
    } else if (page === 1) {
      return <Form data={continue2}  data2={chekInput} />;
    } else if (page === 2) {
      return <Step2 />;
    }
  };
  //This is the function passing to the landing page through props


  const chekInput = () =>{
    console.log('chekcin')
  }


  const continue2 = () => {
    setPage((currPage) => currPage + 1);
  };

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div>{PageDisplay()}</div>
      <div className="has-text-centered"></div>
    </>
  );
};

export default MainScreen;
