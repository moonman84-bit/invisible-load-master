import React, { useRef, useState } from "react";
import {Container , Row, Col, Button} from 'react-bootstrap'  

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-utilities.css';
import "animate.css/animate.min.css";
import { translationCopy } from "../../data/translations";

import "./Questions.css";

import NumberInputTime from "../NumberInput/NumberInputTime";
import NumberInputFrequency from "../NumberInput/NumberInputFrequency";

import { Animated } from "react-animated-css";

import DonutChart from "../Graph/Graph";


function Question() {

  const [Newdata, setNewdata] = useState([]);

  const [legendData, setlegendData] = useState([]);

  const [colors, setColors] = useState([]);


  let [selectedOption, setSelectedOption] = useState(null);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [isInput1Enabled, setIsInput1Enabled] = useState(false);
  const [isInput2Enabled, setIsInput2Enabled] = useState(false);
  const [isInput3Enabled, setIsInput3Enabled] = useState(false);
  const [isInput4Enabled, setIsInput4Enabled] = useState(false);
  const [isInput5Enabled, setIsInput5Enabled] = useState(false);
  const [isInput6Enabled, setIsInput6Enabled] = useState(false);
  const [isInput7Enabled, setIsInput7Enabled] = useState(false);
  const [isInput8Enabled, setIsInput8Enabled] = useState(false);
  const [isInput9Enabled, setIsInput9Enabled] = useState(false);
  const [isInput10Enabled, setIsInput10Enabled] = useState(false);
  const [isInput11Enabled, setIsInput11Enabled] = useState(false);
  const [isInput12Enabled, setIsInput12Enabled] = useState(false);
  const [isInput13Enabled, setIsInput13Enabled] = useState(false);
  const [isInput14Enabled, setIsInput14Enabled] = useState(false);
  const [isInput15Enabled, setIsInput15Enabled] = useState(false);

  const [input1Value, setInput1Value] = useState(0); // State to store the value from Input 1
  const [input2Value, setInput2Value] = useState(0); // State to store the value from Input 1

  const [input3Value, setInput3Value] = useState(0); // State to store the value from Input 2
  const [input4Value, setInput4Value] = useState(0); // State to store the value from Input 2

  const [input5Value, setInput5Value] = useState(0); // State to store the value from Input 3
  const [input6Value, setInput6Value] = useState(0); // State to store the value from Input 3

  const [input7Value, setInput7Value] = useState(0); // State to store the value from Input 4
  const [input8Value, setInput8Value] = useState(0); // State to store the value from Input 4

  const [input9Value, setInput9Value] = useState(0); // State to store the value from Input 5
  const [input10Value, setInput10Value] = useState(0); // State to store the value from Input 5

  const [input11Value, setInput11Value] = useState(0); // State to store the value from Input 6
  const [input12Value, setInput12Value] = useState(0); // State to store the value from Input 6

  const [input13Value, setInput13Value] = useState(0); // State to store the value from Input 7
  const [input14Value, setInput14Value] = useState(0); // State to store the value from Input 7

  const [input15Value, setInput15Value] = useState(0); // State to store the value from Input 8
  const [input16Value, setInput16Value] = useState(0); // State to store the value from Input 8

  const [input17Value, setInput17Value] = useState(0); // State to store the value from Input 9
  const [input18Value, setInput18Value] = useState(0); // State to store the value from Input 9

  const [input19Value, setInput19Value] = useState(0); // State to store the value from Input 10
  const [input20Value, setInput20Value] = useState(0); // State to store the value from Input 10

  const [input21Value, setInput21Value] = useState(0); // State to store the value from Input 11
  const [input22Value, setInput22Value] = useState(0); // State to store the value from Input 11

  const [input23Value, setInput23Value] = useState(0); // State to store the value from Input 12
  const [input24Value, setInput24Value] = useState(0); // State to store the value from Input 12

  const [input25Value, setInput25Value] = useState(0); // State to store the value from Input 13
  const [input26Value, setInput26Value] = useState(0); // State to store the value from Input 13

  const [input27Value, setInput27Value] = useState(0); // State to store the value from Input 14
  const [input28Value, setInput28Value] = useState(0); // State to store the value from Input 14

  const [input29Value, setInput29Value] = useState(0); // State to store the value from Input 15
  const [input30Value, setInput30Value] = useState(0); // State to store the value from Input 15



  const startElementRef = useRef(null);
  const firstquestionRef = useRef(null);
  const secondquestionRef = useRef(null);

  const resultsElement = useRef(null);

  const tasknameone = useRef(null);
  const taskoneurl = useRef(null);
  const taskonecolor = useRef(null);
  const taskoneimage = useRef(null);

  const tasknametwo = useRef(null);
  const tasktwourl = useRef(null);
  const tasktwocolor = useRef(null);
  const tasktwoimage = useRef(null);

  const tasknamethree = useRef(null);
  const taskthreeurl = useRef(null);
  const taskthreecolor = useRef(null);
  const taskthreeimage = useRef(null);

  const tasknamefour = useRef(null);
  const taskfoururl = useRef(null);
  const taskfourcolor = useRef(null);
  const taskfourimage = useRef(null);

  const tasknamefive = useRef(null);
  const taskfiveurl = useRef(null);
  const taskfivecolor = useRef(null);
  const taskfiveimage = useRef(null);

  const tasknamesix = useRef(null);
  const tasksixurl = useRef(null);
  const tasksixcolor = useRef(null);
  const tasksiximage = useRef(null);

  const tasknameseven = useRef(null);
  const tasksevenurl = useRef(null);
  const tasksevencolor = useRef(null);
  const tasksevenimage = useRef(null);

  const tasknameeight = useRef(null);
  const taskeighturl = useRef(null);
  const taskeightcolor = useRef(null);
  const taskeightimage = useRef(null);

  const tasknamenine = useRef(null);
  const tasknineurl = useRef(null);
  const taskninecolor = useRef(null);
  const tasknineimage = useRef(null);

  const tasknameten = useRef(null);
  const tasktenurl = useRef(null);
  const tasktencolor = useRef(null);
  const tasktenimage = useRef(null);

  const tasknameeleven = useRef(null);
  const taskelevenurl = useRef(null);
  const taskelevencolor = useRef(null);
  const taskelevenimage = useRef(null);

  const tasknametwelve = useRef(null);
  const tasktwelveurl = useRef(null);
  const tasktwelvecolor = useRef(null);
  const tasktwelveimage = useRef(null);

  const tasknamethirteen = useRef(null);
  const taskthirteenurl = useRef(null);
  const taskthirteencolor = useRef(null);
  const taskthirteenimage = useRef(null);

  const tasknamefourteen = useRef(null);
  const taskfourteenurl = useRef(null);
  const taskfourteencolor = useRef(null);
  const taskfourteenimage = useRef(null);

  const tasknamefifteen = useRef(null);
  const taskfifteenurl = useRef(null);
  const taskfifteencolor = useRef(null);
  const taskfifteenimage = useRef(null);

  const [isBold, setIsBold] = useState(false);
  const [isBold2, setIsBold2] = useState(false);
  const [isBold3, setIsBold3] = useState(false);
  const [isBold4, setIsBold4] = useState(false);
  const [isBold5, setIsBold5] = useState(false);
  const [isBold6, setIsBold6] = useState(false);
  const [isBold7, setIsBold7] = useState(false);
  const [isBold8, setIsBold8] = useState(false);
  const [isBold9, setIsBold9] = useState(false);
  const [isBold10, setIsBold10] = useState(false);
  const [isBold11, setIsBold11] = useState(false);
  const [isBold12, setIsBold12] = useState(false);
  const [isBold13, setIsBold13] = useState(false);
  const [isBold14, setIsBold14] = useState(false);
  const [isBold15, setIsBold15] = useState(false);
  const [isCheckWhole, setCheckWhole] = useState(false);
  const [isCheckWhole2, setCheckWhole2] = useState(false);
  const [isCheckWhole3, setCheckWhole3] = useState(false);
  const [isCheckWhole4, setCheckWhole4] = useState(false);
  const [isCheckWhole5, setCheckWhole5] = useState(false);
  const [isCheckWhole6, setCheckWhole6] = useState(false);
  const [isCheckWhole7, setCheckWhole7] = useState(false);
  const [isCheckWhole8, setCheckWhole8] = useState(false);
  const [isCheckWhole9, setCheckWhole9] = useState(false);
  const [isCheckWhole10, setCheckWhole10] = useState(false);
  const [isCheckWhole11, setCheckWhole11] = useState(false);
  const [isCheckWhole12, setCheckWhole12] = useState(false);
  const [isCheckWhole13, setCheckWhole13] = useState(false);
  const [isCheckWhole14, setCheckWhole14] = useState(false);
  const [isCheckWhole15, setCheckWhole15] = useState(false);
  const [isColorInput, setColorInput] = useState(false);
  const [isColorInput2, setColorInput2] = useState(false);
  const [isColorInput3, setColorInput3] = useState(false);
  const [isColorInput4, setColorInput4] = useState(false);
  const [isColorInput5, setColorInput5] = useState(false);
  const [isColorInput6, setColorInput6] = useState(false);
  const [isColorInput7, setColorInput7] = useState(false);
  const [isColorInput8, setColorInput8] = useState(false);
  const [isColorInput9, setColorInput9] = useState(false);
  const [isColorInput10, setColorInput10] = useState(false);
  const [isColorInput11, setColorInput11] = useState(false);
  const [isColorInput12, setColorInput12] = useState(false);
  const [isColorInput13, setColorInput13] = useState(false);
  const [isColorInput14, setColorInput14] = useState(false);
  const [isColorInput15, setColorInput15] = useState(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsButtonDisabled(false);
  };

  const handleCheckboxChange = (inputNumber) => {
    switch (inputNumber) {
      case 1:
        setIsInput1Enabled(!isInput1Enabled);
        setIsBold(!isBold);
        setCheckWhole(!isCheckWhole);
        setColorInput(!isColorInput);
        break;
      case 2:
        setIsInput2Enabled(!isInput2Enabled);
        setIsBold2(!isBold2);
        setCheckWhole2(!isCheckWhole2);
        setColorInput2(!isColorInput2);
        break;
      case 3:
        setIsInput3Enabled(!isInput3Enabled);
        setIsBold3(!isBold3);
        setCheckWhole3(!isCheckWhole3);
        setColorInput3(!isColorInput3);
        break;
      case 4:
        setIsInput4Enabled(!isInput4Enabled);
        setIsBold4(!isBold4);
        setCheckWhole4(!isCheckWhole4);
        setColorInput4(!isColorInput4);
        break;
      case 5:
        setIsInput5Enabled(!isInput5Enabled);
        setIsBold5(!isBold5);
        setCheckWhole5(!isCheckWhole5);
        setColorInput5(!isColorInput5);
        break;
      case 6:
        setIsInput6Enabled(!isInput6Enabled);
        setIsBold6(!isBold6);
        setCheckWhole6(!isCheckWhole6);
        setColorInput6(!isColorInput6);
        break;
      case 7:
        setIsInput7Enabled(!isInput7Enabled);
        setIsBold7(!isBold7);
        setCheckWhole7(!isCheckWhole7);
        setColorInput7(!isColorInput7);
        break;
      case 8:
        setIsInput8Enabled(!isInput8Enabled);
        setIsBold8(!isBold8);
        setCheckWhole8(!isCheckWhole8);
        setColorInput8(!isColorInput8);
        break;
      case 9:
        setIsInput9Enabled(!isInput9Enabled);
        setIsBold9(!isBold9);
        setCheckWhole9(!isCheckWhole9);
        setColorInput9(!isColorInput9);
        break;
      case 10:
        setIsInput10Enabled(!isInput10Enabled);
        setIsBold10(!isBold10);
        setCheckWhole10(!isCheckWhole10);
        setColorInput10(!isColorInput10);
        break;
      case 11:
        setIsInput11Enabled(!isInput11Enabled);
        setIsBold11(!isBold11);
        setCheckWhole11(!isCheckWhole11);
        setColorInput11(!isColorInput11);
        break;
      case 12:
        setIsInput12Enabled(!isInput12Enabled);
        setIsBold12(!isBold12);
        setCheckWhole12(!isCheckWhole12);
        setColorInput12(!isColorInput12);
        break;
      case 13:
        setIsInput13Enabled(!isInput13Enabled);
        setIsBold13(!isBold13);
        setCheckWhole13(!isCheckWhole13);
        setColorInput13(!isColorInput13);
        break;
      case 14:
        setIsInput14Enabled(!isInput14Enabled);
        setIsBold14(!isBold14);
        setCheckWhole14(!isCheckWhole14);
        setColorInput14(!isColorInput14);
        break;
      case 15:
        setIsInput15Enabled(!isInput15Enabled);
        setIsBold15(!isBold15);
        setCheckWhole15(!isCheckWhole15);
        setColorInput15(!isColorInput15);
        break;

      default:
        break;
    }
  };

  

  const handleLivingQButtonClick = (event) => {
    firstquestionRef.current.style.display = "flex";
    startElementRef.current.style.display = "none";
  };

  const handleContinueClick = (event) => {
    const firstanswer = selectedOption;
    // console.log(firstanswer);
    secondquestionRef.current.style.display = "block";
    firstquestionRef.current.style.display = "none";
   // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBacktoLiving = () => {
    secondquestionRef.current.style.display = "none";
    firstquestionRef.current.style.display = "block";
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTotalValue(0);
  };

// State to hold the variable value
const [totalValue, setTotalValue] = useState(0);

  const handleSubmit = () => {
 
    if (isInput1Enabled) {
      const value1 = input1Value;
      const value2 = input2Value;
      const taskname1 = tasknameone.current.innerHTML;
      const taskscore1 = tasknameone.current.id;
      const taskoneoverallscore = taskscore1 * value1 * value2;
      //console.log(taskoneoverallscore,'Task 1 score');
      const taskonefullscore = taskscore1 * value1 * value2 /  16677;
      const taskonefullscorerounded = taskonefullscore * 100;
      const taskonefullscorepercentage = Math.trunc(taskonefullscorerounded * 10) / 10;
      //console.log(taskonefullscorepercentage,'pew pew');
      const taskoneurladdress = taskoneurl.current.innerHTML;
      const taskOnecolor = taskonecolor.current.innerHTML;
      const taskOneimage = taskoneimage.current.src;

      
     

      const newDataItem = {
        label: taskname1,
        value: taskonefullscorepercentage,
      };

      const legendDataItem = {
        label: taskname1,
        url: taskoneurladdress,
        image: taskOneimage,
        colour: taskOnecolor,
        percentage: taskonefullscorepercentage
      };

      const newColor = taskOnecolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);

    setTotalValue(prevValue => prevValue + parseFloat(taskoneoverallscore));


  
       
    

    }
    if (isInput2Enabled) {
      const value3 = input3Value;
      const value4 = input4Value;
      const taskname2 = tasknametwo.current.innerHTML;
      const taskscore2 = tasknametwo.current.id;
      const tasktwooverallscore = taskscore2 * value3 * value4;
      //console.log(tasktwooverallscore,'Task 2 score');
      const tasktwofullscore = taskscore2 * value3 * value4 /  16677;
      const tasktwofullscorerounded = tasktwofullscore * 100;
      const tasktwofullscorepercentage = Math.trunc(tasktwofullscorerounded  * 10) / 10;
      const tasktwourladdress = tasktwourl.current.innerHTML;
      const taskTwocolor = tasktwocolor.current.innerHTML;
      const taskTwoimage = tasktwoimage.current.src;
      //console.log("Task two score:", tasktwooverallscore);
    
  

      const newDataItem = {
        label: taskname2,
        value: tasktwofullscorepercentage,
      };
      const legendDataItem = {
        label: taskname2,
        url: tasktwourladdress,
        image: taskTwoimage,
        colour: taskTwocolor,
        percentage: tasktwofullscorepercentage,
      };

      const newColor = taskTwocolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(tasktwooverallscore));
    }
    if (isInput3Enabled) {
      const value5 = input5Value;
      const value6 = input6Value;
      const taskname3 = tasknamethree.current.innerHTML;
      const taskscore3 = tasknamethree.current.id;
      const taskthreeoverallscore = taskscore3 * value5 * value6;
      //console.log(taskthreeoverallscore,'Task 3 score');
      const taskthreefullscore = taskscore3 * value5 * value6 / 16677;
      const taskthreefullscorerounded = taskthreefullscore * 100;
      const taskthreefullscorepercentage = Math.trunc(taskthreefullscorerounded * 10) / 10;
      const taskthreeurladdress = taskoneurl.current.innerHTML;
      const taskThreecolor = taskthreecolor.current.innerHTML;
      const taskThreeimage = taskthreeimage.current.src;

      const newDataItem = {
        label: taskname3,
        value: taskthreefullscorepercentage,
      };

      const legendDataItem = {
        label: taskname3,
        url: taskthreeurladdress,
        image: taskThreeimage,
        colour: taskThreecolor,
        percentage: taskthreefullscorepercentage,
      };

      const newColor = taskThreecolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskthreeoverallscore ));
    }
    if (isInput4Enabled) {
      const value7 = input7Value;
      const value8 = input8Value;
      const taskname4 = tasknamefour.current.innerHTML;
      const taskscore4 = tasknamefour.current.id;
      const taskfouroverallscore = taskscore4 * value7 * value8;
      //console.log(taskfouroverallscore,'Task 4 score');
      const taskfourfullscore = taskscore4 * value7 * value8 / 16677;
      const taskfourfullscorerounded = taskfourfullscore * 100;
      const taskfourfullscorepercentage = Math.trunc(taskfourfullscorerounded * 10) / 10;
      const taskfoururladdress = taskfoururl.current.innerHTML;
      const taskFourcolor = taskfourcolor.current.innerHTML;
      const taskFourimage = taskfourimage.current.src;

      const newDataItem = {
        label: taskname4,
        value: taskfourfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname4,
        url: taskfoururladdress,
        image: taskFourimage,
        colour: taskFourcolor,
        percentage: taskfourfullscorepercentage,
      };

      const newColor = taskFourcolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskfouroverallscore));
    }
    if (isInput5Enabled) {
      const value9 = input9Value;
      const value10 = input10Value;
      const taskname5 = tasknamefive.current.innerHTML;
      const taskscore5 = tasknamefive.current.id;
      const taskfiveoverallscore = taskscore5 * value9 * value10;
     
      const taskfivefullscore = taskscore5 * value9 * value10 / 16677;
     
      const taskfivefullscorerounded = taskfivefullscore * 100;
     
      const taskfivefullscorepercentage = Math.trunc(taskfivefullscorerounded  * 10) / 10;
      const taskfiveurladdress = taskfiveurl.current.innerHTML;
      const taskFivecolor = taskfivecolor.current.innerHTML;
      const taskFiveimage = taskfiveimage.current.src;

      console.log(taskfivefullscore);
      const newDataItem = {
        label: taskname5,
        value: taskfivefullscorepercentage,
      };

      const legendDataItem = {
        label: taskname5,
        url: taskfiveurladdress,
        image: taskFiveimage,
        colour: taskFivecolor,
        percentage: taskfivefullscorepercentage
      };

      const newColor = taskFivecolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskfiveoverallscore ));
    }
    if (isInput6Enabled) {
      const value11 = input11Value;
      const value12 = input12Value;
      const taskname6 = tasknamesix.current.innerHTML;
      const taskscore6 = tasknamesix.current.id;
      const tasksixoverallscore = taskscore6 * value11 * value12;
      //console.log(tasksixoverallscore ,'Task 6 score');
      const tasksixfullscore = taskscore6 * value11 * value12 / 16677;
      const tasksixfullscorerounded = tasksixfullscore * 100;
      const tasksixfullscorepercentage = Math.trunc(tasksixfullscorerounded * 10) / 10;
      const tasksixurladdress = tasksixurl.current.innerHTML;
      const taskSixcolor = tasksixcolor.current.innerHTML;
      const taskSiximage = tasksiximage.current.src;

      const newDataItem = {
        label: taskname6,
        value: tasksixfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname6,
        url: tasksixurladdress,
        image: taskSiximage,
        colour: taskSixcolor,
        percentage: tasksixfullscorepercentage
      };

      const newColor = taskSixcolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(tasksixoverallscore));
    }
    if (isInput7Enabled) {
      const value13 = input13Value;
      const value14 = input14Value;
      const taskname7 = tasknameseven.current.innerHTML;
      const taskscore7 = tasknameseven.current.id;
      const tasksevenoverallscore = taskscore7 * value13 * value14;
      //console.log(tasksevenoverallscore ,'Task 7 score');
      const tasksevenfullscore = taskscore7 * value13 * value14 / 16677;
      const tasksevenfullscorerounded = tasksevenfullscore * 100;
      const tasksevenfullscorepercentage = Math.trunc(tasksevenfullscorerounded *  10) / 10;
      const tasksevenurladdress = tasksevenurl.current.innerHTML;
      const taskSevencolor = tasksevencolor.current.innerHTML;
      const taskSevenimage = tasksevenimage.current.src;

      const newDataItem = {
        label: taskname7,
        value:tasksevenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname7,
        url: tasksevenurladdress,
        image: taskSevenimage,
        colour: taskSevencolor,
        percentage: tasksevenfullscorepercentage
      };

      const newColor = taskSevencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(tasksevenoverallscore));
    }
    if (isInput8Enabled) {
      const value15 = input15Value;
      const value16 = input16Value;
      const taskname8 = tasknameeight.current.innerHTML;
      const taskscore8 = tasknameeight.current.id;
      const taskeightoverallscore = taskscore8 * value15 * value16;
      //console.log(taskeightoverallscore ,'Task 8 score');
      const taskeightfullscore = taskscore8 * value15 * value16 / 16677;
      const taskeightfullscorerounded = taskeightfullscore * 100;
      const taskeightfullscorepercentage = Math.trunc(taskeightfullscorerounded * 10) / 10;
      const taskeighturladdress = taskeighturl.current.innerHTML;
      const taskEightcolor = taskeightcolor.current.innerHTML;
      const taskEightimage = taskeightimage.current.src;

      const newDataItem = {
        label: taskname8,
        value: taskeightfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname8,
        url: taskeighturladdress,
        image: taskEightimage,
        colour: taskEightcolor,
        percentage: taskeightfullscorepercentage
      };

      const newColor = taskEightcolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseInt(taskeightoverallscore));
    }
    if (isInput9Enabled) {
      const value17 = input17Value;
      const value18 = input18Value;
      const taskname9 = tasknamenine.current.innerHTML;
      const taskscore9 = tasknamenine.current.id;
      const tasknineoverallscore = (taskscore9 * value17 * value18).toFixed();
      //console.log(tasknineoverallscore ,'Task 9 score');
      const taskninefullscore = taskscore9 * value17 * value18 / 16677;
      const taskninefullscorerounded = taskninefullscore * 100;
      const taskninefullscorepercentage = Math.trunc(taskninefullscorerounded * 10) / 10;
      const tasknineurladdress = tasknineurl.current.innerHTML;
      const taskNinecolor = taskninecolor.current.innerHTML;
      const taskNineimage = tasknineimage.current.src;

      const newDataItem = {
        label: taskname9,
        value: taskninefullscorepercentage,
      };

      const legendDataItem = {
        label: taskname9,
        url: tasknineurladdress,
        image: taskNineimage,
        colour: taskNinecolor,
        percentage: taskninefullscorepercentage
      };

      const newColor = taskNinecolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(tasknineoverallscore));
    }
    if (isInput10Enabled) {
      const value19 = input19Value;
      const value20 = input20Value;
      const taskname10 = tasknameten.current.innerHTML;
      const taskscore10 = tasknameten.current.id;
      const tasktenoverallscore = taskscore10 * value19 * value20;
      //console.log(tasktenoverallscore ,'Task 10 score');
      const tasktenfullscore = taskscore10 * value19 * value20 / 16677;
      const tasktenfullscorerounded = tasktenfullscore  * 100;
      const tasktenfullscorepercentage = Math.trunc(tasktenfullscorerounded * 10) / 10;
      const tasktenurladdress = tasktenurl.current.innerHTML;
      const taskTencolor = tasktencolor.current.innerHTML;
      const taskTenimage = tasktenimage.current.src;

      const newDataItem = {
        label: taskname10,
        value: tasktenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname10,
        url: tasktenurladdress,
        image: taskTenimage,
        colour: taskTencolor,
        percentage: tasktenfullscorepercentage
      };

      const newColor = taskTencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseInt(tasktenoverallscore));
    }
    if (isInput11Enabled) {
      const value21 = input21Value;
      const value22 = input22Value;
      const taskname11 = tasknameeleven.current.innerHTML;
      const taskscore11 = tasknameeleven.current.id;
      const taskelevnoverallscore = taskscore11 * value21 * value22;
      //console.log(taskelevnoverallscore  ,'Task 11 score');
      const taskelevenfullscore = taskscore11 * value21 * value22 / 16677;
      const taskelevenfullscorerounded = taskelevenfullscore  * 100;
      const taskelevenfullscorepercentage = Math.trunc(taskelevenfullscorerounded * 10) / 10;
      const taskelevenurladdress = taskelevenurl.current.innerHTML;
      const taskElevencolor = taskelevencolor.current.innerHTML;
      const taskElevenimage = taskelevenimage.current.src;

      const newDataItem = {
        label: taskname11,
        value: taskelevenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname11,
        url: taskelevenurladdress,
        image: taskElevenimage,
        colour: taskElevencolor,
        percentage: taskelevenfullscorepercentage
      };

      const newColor = taskElevencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskelevnoverallscore));
    }
    if (isInput12Enabled) {
      const value23 = input23Value;
      const value24 = input24Value;
      const taskname12 = tasknametwelve.current.innerHTML;
      const taskscore12 = tasknametwelve.current.id;
      const tasktwelveoverallscore = (taskscore12 * value23 * value24).toFixed();
      //console.log(tasktwelveoverallscore  ,'Task 12 score');
      const tasktwelvefullscore = taskscore12 * value23 * value24 / 16677;
      const tasktwelvefullscorerounded = tasktwelvefullscore  * 100;
      const tasktwelvefullscorepercentage = Math.trunc(tasktwelvefullscorerounded * 10) / 10;
      const tasktwelvenurladdress = tasktwelveurl.current.innerHTML;
      const taskTwelvecolor = tasktwelvecolor.current.innerHTML;
      const taskTwelveimage = tasktwelveimage.current.src;

      const newDataItem = {
        label: taskname12,
        value: tasktwelvefullscorepercentage,
      };

      const legendDataItem = {
        label: taskname12,
        url: tasktwelvenurladdress,
        image: taskTwelveimage,
        colour: taskTwelvecolor,
        percentage: tasktwelvefullscorepercentage
      };

      const newColor = taskTwelvecolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(tasktwelveoverallscore));
    }
    if (isInput13Enabled) {
      const value25 = input25Value;
      const value26 = input26Value;
      const taskname13 = tasknamethirteen.current.innerHTML;
      const taskscore13 = tasknamethirteen.current.id;
      const taskthirteenoverallscore = taskscore13 * value25 * value26;
     // console.log(taskthirteenoverallscore  ,'Task 13 score');
      const taskthirteenfullscore = taskscore13 * value25 * value26 / 16677;
      const taskthirteenfullscorerounded = taskthirteenfullscore * 100;
      const taskthirteenfullscorepercentage = Math.trunc(taskthirteenfullscorerounded * 10) / 10;
      const taskthirteenurladdress = taskthirteenurl.current.innerHTML;
      const taskThirteencolor = taskthirteencolor.current.innerHTML;
      const taskThirteenimage = taskthirteenimage.current.src;

      const newDataItem = {
        label: taskname13,
        value: taskthirteenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname13,
        url: taskthirteenurladdress,
        image: taskThirteenimage,
        colour: taskThirteencolor,
        percentage: taskthirteenfullscorepercentage
      };

      const newColor = taskThirteencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue + parseFloat(taskthirteenoverallscore));
    }
    if (isInput14Enabled) {
      const value27 = input27Value;
      const value28 = input28Value;
      const taskname14 = tasknamefourteen.current.innerHTML;
      const taskscore14 = tasknamefourteen.current.id;
      const taskfourteenoverallscore = taskscore14 * value27 * value28;
      //console.log(taskfourteenoverallscore  ,'Task 14 score');
      const taskfourteenfullscore = taskscore14 * value27 * value28 / 16677;
      const taskfourteenfullscorerounded = taskfourteenfullscore  * 100;
      const taskfourteenfullscorepercentage = Math.trunc(taskfourteenfullscorerounded * 10) / 10;
      const taskfourteenurladdress = taskfourteenurl.current.innerHTML;
      const taskFourteencolor = taskfourteencolor.current.innerHTML;
      const taskFourteenimage = taskfourteenimage.current.src;

      const newDataItem = {
        label: taskname14,
        value: taskfourteenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname14,
        url: taskfourteenurladdress,
        image: taskFourteenimage,
        colour: taskFourteencolor,
        percentage: taskfourteenfullscorepercentage
      };

      const newColor = taskFourteencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskfourteenoverallscore));
    }
    if (isInput15Enabled) {
      const value29 = input29Value;
      const value30 = input30Value;
      const taskname15 = tasknamefifteen.current.innerHTML;
      const taskscore15 = tasknamefifteen.current.id;
      const taskfifteenoverallscore = taskscore15 * value29 * value30;
      //console.log(taskfifteenoverallscore  ,'Task 15 score');
      const taskfifteenfullscore = taskscore15 * value29 * value30 / 16677;
      const taskfifteenfullscorerounded = taskfifteenfullscore  * 100;
      const taskfifteenfullscorepercentage = Math.trunc(taskfifteenfullscorerounded * 10) / 10;
      const taskfifteenurladdress = taskfifteenurl.current.innerHTML;
      const taskFifteencolor = taskfifteencolor.current.innerHTML;
      const taskFifteenimage = taskfifteenimage.current.src;


      const newDataItem = {
        label: taskname15,
        value: taskfifteenfullscorepercentage,
      };

      const legendDataItem = {
        label: taskname15,
        url: taskfifteenurladdress,
        image: taskFifteenimage,
        colour: taskFifteencolor,
        percentage: taskfifteenfullscorepercentage
      };

      const newColor = taskFifteencolor;

      setNewdata((prevData) => [...prevData, newDataItem]);
      setlegendData((prevData) => [...prevData, legendDataItem]);
      setColors((prevColors) => [...prevColors, newColor]);
      setTotalValue(prevValue => prevValue +  parseFloat(taskfifteenoverallscore));
    }


   setTotalValue(prevValue => (prevValue / 16677) * 100);
 
    const fulltotal = totalValue;
    console.log(fulltotal,'work it');
    secondquestionRef.current.style.display = "none";
    resultsElement.current.style.display = "block";
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   
  };

  const handleValueChange1 = (value) => {
    setInput1Value(value);
  };

  const handleValueChange2 = (value) => {
    setInput2Value(value);
  };

  const handleValueChange3 = (value) => {
    setInput3Value(value);
  };

  const handleValueChange4 = (value) => {
    setInput4Value(value);
  };

  const handleValueChange5 = (value) => {
    setInput5Value(value);
  };

  const handleValueChange6 = (value) => {
    setInput6Value(value);
  };

  const handleValueChange7 = (value) => {
    setInput7Value(value);
  };

  const handleValueChange8 = (value) => {
    setInput8Value(value);
  };
  const handleValueChange9 = (value) => {
    setInput9Value(value);
  };
  const handleValueChange10 = (value) => {
    setInput10Value(value);
  };
  const handleValueChange11 = (value) => {
    setInput11Value(value);
  };
  const handleValueChange12 = (value) => {
    setInput12Value(value);
  };
  const handleValueChange13 = (value) => {
    setInput13Value(value);
  };
  const handleValueChange14 = (value) => {
    setInput14Value(value);
  };
  const handleValueChange15 = (value) => {
    setInput15Value(value);
  };
  const handleValueChange16 = (value) => {
    setInput16Value(value);
  };
  const handleValueChange17 = (value) => {
    setInput17Value(value);
  };
  const handleValueChange18 = (value) => {
    setInput18Value(value);
  };
  const handleValueChange19 = (value) => {
    setInput19Value(value);
  };
  const handleValueChange20 = (value) => {
    setInput20Value(value);
  };
  const handleValueChange21 = (value) => {
    setInput21Value(value);
  };
  const handleValueChange22 = (value) => {
    setInput22Value(value);
  };
  const handleValueChange23 = (value) => {
    setInput23Value(value);
  };
  const handleValueChange24 = (value) => {
    setInput24Value(value);
  };
  const handleValueChange25 = (value) => {
    setInput25Value(value);
  };
  const handleValueChange26 = (value) => {
    setInput26Value(value);
  };
  const handleValueChange27 = (value) => {
    setInput27Value(value);
  };
  const handleValueChange28 = (value) => {
    setInput28Value(value);
  };
  const handleValueChange29 = (value) => {
    setInput29Value(value);
  };
  const handleValueChange30 = (value) => {
    setInput30Value(value);
  };

  const handleReset1 = () => {
    setInput1Value(0);
    setInput2Value(0);
  };
  const handleReset2 = () => {
    setInput3Value(0);
    setInput4Value(0);
  };
  const handleReset3 = () => {
    setInput5Value(0);
    setInput6Value(0);
  };
  const handleReset4 = () => {
    setInput7Value(0);
    setInput8Value(0);
  };
  const handleReset5 = () => {
    setInput9Value(0);
    setInput10Value(0);
  };
  const handleReset6 = () => {
    setInput11Value(0);
    setInput12Value(0);
  };
  const handleReset7 = () => {
    setInput13Value(0);
    setInput14Value(0);
  };
  const handleReset8 = () => {
    setInput15Value(0);
    setInput16Value(0);
  };
  const handleReset9 = () => {
    setInput17Value(0);
    setInput18Value(0);
  };
  const handleReset10 = () => {
    setInput19Value(0);
    setInput20Value(0);
  };
  const handleReset11 = () => {
    setInput21Value(0);
    setInput22Value(0);
  };
  const handleReset12 = () => {
    setInput23Value(0);
    setInput24Value(0);
  };
  const handleReset13 = () => {
    setInput25Value(0);
    setInput26Value(0);
  };
  const handleReset14 = () => {
    setInput27Value(0);
    setInput28Value(0);
  };
  const handleReset15 = () => {
    setInput29Value(0);
    setInput30Value(0);
  };

  const handleBacktoHousehold = () => {
    setNewdata([]);
    setlegendData([]); 
    setColors([]);// Set the array state to an empty array
    setTotalValue(0);
   
   

    secondquestionRef.current.style.display = "block";
    resultsElement.current.style.display = "none";
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBacktoStart = () => {
    //Clear graph data
    setNewdata([]);
    setlegendData([]); 
    setColors([]);

    // Clear householdtask input

    setInput1Value(0);
    setInput2Value(0);
    setInput3Value(0);
    setInput4Value(0);
    setInput5Value(0);
    setInput6Value(0);
    setInput7Value(0);
    setInput8Value(0);
    setInput9Value(0);
    setInput10Value(0);
    setInput11Value(0);
    setInput12Value(0);
    setInput13Value(0);
    setInput14Value(0);
    setInput15Value(0);
    setInput16Value(0);
    setInput17Value(0);
    setInput18Value(0);
    setInput19Value(0);
    setInput20Value(0);
    setInput21Value(0);
    setInput22Value(0);
    setInput23Value(0);
    setInput24Value(0);
    setInput25Value(0);
    setInput26Value(0);
    setInput27Value(0);
    setInput28Value(0);
    setInput29Value(0);
    setInput30Value(0);

    // Reset checkboxes to unchecked

    setIsInput1Enabled(false);
    setIsInput2Enabled(false);
    setIsInput3Enabled(false);
    setIsInput4Enabled(false);
    setIsInput5Enabled(false);
    setIsInput6Enabled(false);
    setIsInput7Enabled(false);
    setIsInput8Enabled(false);
    setIsInput9Enabled(false);
    setIsInput10Enabled(false);
    setIsInput11Enabled(false);
    setIsInput12Enabled(false);
    setIsInput13Enabled(false);
    setIsInput14Enabled(false);
    setIsInput15Enabled(false);

    setIsBold(false);
    setIsBold2(false);
    setIsBold3(false);
    setIsBold4(false);
    setIsBold5(false);
    setIsBold6(false);
    setIsBold7(false);
    setIsBold8(false);
    setIsBold9(false);
    setIsBold10(false);
    setIsBold11(false);
    setIsBold12(false);
    setIsBold13(false);
    setIsBold14(false);
    setIsBold15(false);
    setCheckWhole(false);
    setCheckWhole2(false);
    setCheckWhole3(false);
    setCheckWhole4(false);
    setCheckWhole5(false);
    setCheckWhole6(false);
    setCheckWhole7(false);
    setCheckWhole8(false);
    setCheckWhole9(false);
    setCheckWhole10(false);
    setCheckWhole11(false);
    setCheckWhole13(false);
    setCheckWhole14(false);
    setCheckWhole15(false);
    setColorInput(false);
    setColorInput2(false);
    setColorInput3(false);
    setColorInput4(false);
    setColorInput5(false);
    setColorInput6(false);
    setColorInput7(false);
    setColorInput8(false);
    setColorInput9(false);
    setColorInput10(false);
    setColorInput11(false);
    setColorInput12(false);
    setColorInput13(false);
    setColorInput14(false);
    setColorInput15(false);

 


    // Reset selection to null
    setSelectedOption(null);
    setIsButtonDisabled(true);

    // Clear total data

    setTotalValue(0);


    firstquestionRef.current.style.display = "block";
    resultsElement.current.style.display = "none";
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  };
  

  return (
    
    <Container>
      <div id="start" style={{ display: "none" }}>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Row>
            <Col md={12}>
              <h2>Calculate your Invisible Load score</h2>
            </Col>
          </Row>
          <Row>
            <Col offset={{ md: 2 }} md={5}>
              <div className="imgholder">
                <img src="https://placehold.co/600x400/000000/FFFFFF.jpg" />
              </div>
            </Col>
            <Col md={5}>
              <p className="subtext">
                This simple yet powerful tool quantifies your Invisible Load, by
                examining the emotional and physical demands of your weekly
                household tasks.
              </p>
              <p className="subtext">
                Follow the simple steps below to explore your own Invisible Load
                and learn how you can reduce it with Samsung SmartThings.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="buttoncontainer">
                <button onClick={handleLivingQButtonClick}>
                  Calculate Your Score
                </button>
              </div>
            </Col>
          </Row>
        </Animated>
      </div>
      <div
        id="firstquestion"
        ref={firstquestionRef}
        style={{ display: "block" }}
      >
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Row className="mobile-padding">
            <Col md={{ span: 8, offset: 2 }}>
              <h2>{translationCopy.en.livingdynamictitle}</h2>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col lg={{span: 3, offset: 3 }} md={{ span: 4, offset: 2 }} xs={6}>
              <input
                type="radio"
                name="choice"
                id="livechild"
                value="1"
                checked={selectedOption === "1"}
                onChange={() => handleOptionChange("1")}
              />
              <label for="livechild" className="situationbtns">
                <div className="situationimages">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_LivingSituation_SingleWithChild_138x51_01.png" />
                </div>
                <span className="labeltext">{translationCopy.en.singleparent}</span>
              </label>
            </Col>
            <Col md={4} lg={3} xs={6}>
              <input
                type="radio"
                name="choice"
                id="liveonown"
                value="2"
                checked={selectedOption === "2"}
                onChange={() => handleOptionChange("2")}
              />

              <label for="liveonown" className="situationbtns">
                <div className="situationimages">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_LivingSituation_Single_138x51_01.png" />
                </div>
                <span className="labeltext">{translationCopy.en.liveonown}</span>
              </label>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col lg={{span: 3, offset: 3 }} md={{ span: 4, offset: 2 }} xs={6}>
              <input
                type="radio"
                name="choice"
                id="livepartner"
                value="3"
                checked={selectedOption === "3"}
                onChange={() => handleOptionChange("3")}
              />

              <label for="livepartner" className="situationbtns">
                <div className="situationimages">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_LivingSituation_Partner_138x51_01.png" />
                </div>
                <span className="labeltext">
                {translationCopy.en.livewithpartner}
                </span>
              </label>
            </Col>
            <Col md={4} lg={3} xs={6}>
              <input
                type="radio"
                name="choice"
                id="livefamily"
                value="4"
                checked={selectedOption === "4"}
                onChange={() => handleOptionChange("4")}
              />

              <label for="livefamily" className="situationbtns">
                <div className="situationimages">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_LivingSituation_Family_138x51_01.png" />
                </div>
                <span className="labeltext">{translationCopy.en.livewithfamily}</span>
              </label>
            </Col>
          </Row>
          <Row>                                                       
            <Col>
              <Row className="justify-content-center">
                <Col md={4} lg={3} xs={6}>
                  <input
                    type="radio"
                    name="choice"
                    id="liveshared"
                    value="5"
                    checked={selectedOption === "5"}
                    onChange={() => handleOptionChange("5")}
                  />

                  <label for="liveshared" className="situationbtns">
                    <div className="situationimages">
                      <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_LivingSituation_HouseShare_138x51_01.png" />
                    </div>
                    <span className="labeltext">{translationCopy.en.liveshared}</span>
                  </label>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="calculategrid">
                {/* <p>Selected Option: {selectedOption}</p> */}
                <button
                  onClick={handleContinueClick}
                  disabled={isButtonDisabled}
                  id="continue"
                >{translationCopy.en.continuetohouseholdbtn}
                </button>
              </div>
            </Col>
          </Row>
        </Animated>
      </div>
      <div
        id="secondquestion"
        ref={secondquestionRef}
        style={{ display: "none" }}
      >
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Row>
            <Col lg={{ span: 8, offset: 2 }}  md={{ span: 10, offset: 1 }}>
              <h2>{translationCopy.en.householdtasktitle}</h2>
              <p className="subheadline">
              {translationCopy.en.householdtaskdescription}
              </p>
            </Col>
          </Row>
          <Row className="d-sm-none d-none d-md-none  d-lg-block">
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={{ span: 2, offset: 7 }}>
                  <div className="timeimages">
                    <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Frequency_33x33_01.png" alt="" />
                  </div>
                  <p className="timetitles">{translationCopy.en.frequecyperweektext}</p>
                </Col>
                <Col md={2}>
                  <div className="timeimages">
                    <img src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Time_33x33_01.png" alt="Times a week" />
                  </div>
                  <p className="timetitles">{translationCopy.en.timetext}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choreone" className="fullchores">
                <Row className="align-items-center">
                  <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreOne"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreOne"
                        checked={isInput1Enabled}
                        onChange={() => handleCheckboxChange(1)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_WashingDishes_60x60_02.png"
                        ref={taskoneimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknameone}
                      id="3"
                      style={{ fontWeight: isBold ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtaskone}
                    </p>
                    <p style={{ display: "none" }} ref={taskoneurl}>
                      #tip-one
                    </p>
                    <p style={{ display: "none" }} ref={taskonecolor}>
                      #2089ff
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset1}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput1Enabled}
                        onValueChange={handleValueChange1}
                        style={!isCheckWhole}
                        inputValue={input1Value}
                        maxValue={21}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput1Enabled}
                        onValueChange={handleValueChange2}
                        style={!isCheckWhole}
                        inputValue={input2Value}
                        maxValue={30}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset1}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choretwo" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreTwo"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole2
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole2
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreTwo"
                        checked={isInput2Enabled}
                        onChange={() => handleCheckboxChange(2)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_HouseholdCleaning_60x60_02.png"
                        ref={tasktwoimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknametwo}
                      id="2.8"
                      style={{ fontWeight: isBold2 ? "bold" : "normal" }}
                    >
                       {translationCopy.en.householdtasktwo}
                    </p>
                    <p style={{ display: "none" }} ref={tasktwourl}>
                    #tip-three
                    </p>
                    <p style={{ display: "none" }} ref={tasktwocolor}>
                      #02838f
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset2}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput2 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput2 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput2Enabled}
                        onValueChange={handleValueChange3}
                        style={!isCheckWhole2}
                        inputValue={input3Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput2 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput2Enabled}
                        onValueChange={handleValueChange4}
                        inputValue={input4Value}
                        maxValue={90}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset2}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput2 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorethree" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreThree"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole3
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole3
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreThree"
                        checked={isInput3Enabled}
                        onChange={() => handleCheckboxChange(3)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_TidyingUp_60x60_01.png"
                        ref={taskthreeimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamethree}
                      id="2.7"
                      style={{ fontWeight: isBold3 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtaskthree}
                    </p>
                    <p style={{ display: "none" }} ref={taskthreeurl}>
                    #tip-three
                    </p>
                    <p style={{ display: "none" }} ref={taskthreecolor}>
                      #8192c8
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset3}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput3 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput3 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput3Enabled}
                        onValueChange={handleValueChange5}
                        style={!isCheckWhole3}
                        inputValue={input5Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput3 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput3Enabled}
                        onValueChange={handleValueChange6}
                        inputValue={input6Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset3}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput3 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorefour" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreFour"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole4
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole4
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreFour"
                        checked={isInput4Enabled}
                        onChange={() => handleCheckboxChange(4)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Ironing_60x60_02.png"
                        ref={taskfourimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamefour}
                      id="2.5"
                      style={{ fontWeight: isBold4 ? "bold" : "normal" }}
                    >
                     {translationCopy.en.householdtaskfour}
                    </p>
                    <p style={{ display: "none" }} ref={taskfoururl}>
                    #tip-seven
                    </p>
                    <p style={{ display: "none" }} ref={taskfourcolor}>
                      #02b3e3
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset4}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput4 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput4 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput4Enabled}
                        onValueChange={handleValueChange7}
                        style={!isCheckWhole}
                        inputValue={input7Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput4 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput4Enabled}
                        onValueChange={handleValueChange8}
                        inputValue={input8Value}
                        maxValue={90}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset4}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput4 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorefive" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreFive"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole5
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole5
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreFive"
                        checked={isInput5Enabled}
                        onChange={() => handleCheckboxChange(5)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_DoingLaundry_60x60_01.png"
                        ref={taskfiveimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamefive}
                      id="2.4"
                      style={{ fontWeight: isBold5 ? "bold" : "normal" }}
                    >
                       {translationCopy.en.householdtaskfive}
                    </p>
                    <p style={{ display: "none" }} ref={taskfiveurl}>
                    #tip-five
                    </p>
                    <p style={{ display: "none" }} ref={taskfivecolor}>
                      #97ca57
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset5}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput5 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput5 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput5Enabled}
                        onValueChange={handleValueChange9}
                        style={!isCheckWhole}
                        inputValue={input9Value}
                        maxValue={14}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput5 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput5Enabled}
                        onValueChange={handleValueChange10}
                        inputValue={input10Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset5}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput5 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choresix" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreSix"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole6
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole6
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreSix"
                        checked={isInput6Enabled}
                        onChange={() => handleCheckboxChange(6)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_ManagingFinances__60x6001.png"
                        ref={tasksiximage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamesix}
                      id="2.2"
                      style={{ fontWeight: isBold6 ? "bold" : "normal" }}
                    >
                     {translationCopy.en.householdtasksix}
                    </p>
                    <p style={{ display: "none" }} ref={tasksixurl}>
                    #tip-six
                    </p>
                    <p style={{ display: "none" }} ref={tasksixcolor}>
                      #fcb248
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset6}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput6 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput6 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput6Enabled}
                        onValueChange={handleValueChange11}
                        style={!isCheckWhole6}
                        inputValue={input11Value}
                        maxValue={3}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput6 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput6Enabled}
                        onValueChange={handleValueChange12}
                        style={!isCheckWhole6}
                        inputValue={input12Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset6}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput6 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choreseven" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreSeven"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole7
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole7
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreSeven"
                        checked={isInput7Enabled}
                        onChange={() => handleCheckboxChange(7)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_RubbishRecycling_60x60_02.png"
                        ref={tasksevenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknameseven}
                      id="2.1"
                      style={{ fontWeight: isBold7 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtaskseven}
                    </p>
                    <p style={{ display: "none" }} ref={tasksevenurl}>
                    </p>
                    <p style={{ display: "none" }} ref={tasksevencolor}>
                      #f66700
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset7}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput7 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput7 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput7Enabled}
                        onValueChange={handleValueChange13}
                        style={!isCheckWhole7}
                        inputValue={input13Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput7 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput7Enabled}
                        onValueChange={handleValueChange14}
                        inputValue={input14Value}
                        maxValue={10}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset7}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput7 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choreeight" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreEight"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole8
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole8
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreEight"
                        checked={isInput8Enabled}
                        onChange={() => handleCheckboxChange(8)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Schedule_60x60_01.png"
                        ref={taskeightimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknameeight}
                      id="2"
                      style={{ fontWeight: isBold8 ? "bold" : "normal" }}
                    >
                     {translationCopy.en.householdtaskeight}
                    </p>
                    <p style={{ display: "none" }} ref={taskeighturl}>
                    </p>
                    <p style={{ display: "none" }} ref={taskeightcolor}>
                      #ef3334
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset8}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput8 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput8 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput8Enabled}
                        onValueChange={handleValueChange15}
                        style={!isCheckWhole8}
                        inputValue={input15Value}
                        maxValue={6}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput8 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput8Enabled}
                        onValueChange={handleValueChange16}
                        inputValue={input16Value}
                        maxValue={30}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset8}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput8 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorenine" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreNine"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole9
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole9
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreNine"
                        checked={isInput9Enabled}
                        onChange={() => handleCheckboxChange(9)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_HomeSecurity_60x60_01.png"
                        ref={tasknineimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamenine}
                      id="1.8"
                      style={{ fontWeight: isBold9 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtasknine}
                    </p>
                    <p style={{ display: "none" }} ref={tasknineurl}>
                    #tip-eight
                    </p>
                    <p style={{ display: "none" }} ref={taskninecolor}>
                      #aaaaaa
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset9}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput9 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput9 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput9Enabled}
                        onValueChange={handleValueChange17}
                        style={!isCheckWhole9}
                        inputValue={input17Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput9 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput9Enabled}
                        onValueChange={handleValueChange18}
                        inputValue={input18Value}
                        maxValue={30}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset9}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput9 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choreten" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreTen"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole10
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole10
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreTen"
                        checked={isInput10Enabled}
                        onChange={() => handleCheckboxChange(10)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Shopping_60x60_01.png"
                        ref={tasktenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknameten}
                      id="1.7"
                      style={{ fontWeight: isBold10 ? "bold" : "normal" }}
                    >
                     {translationCopy.en.householdtaskten}
                    </p>
                    <p style={{ display: "none" }} ref={tasktenurl}>
                    #tip-nine
                    </p>
                    <p style={{ display: "none" }} ref={tasktencolor}>
                      #bcdcff
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset10}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput10 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput10 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput10Enabled}
                        onValueChange={handleValueChange19}
                        style={!isCheckWhole10}
                        inputValue={input19Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput10 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput10Enabled}
                        onValueChange={handleValueChange20}
                        inputValue={input20Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset10}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput10 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choreeleven" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreEleven"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole11
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole11
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreEleven"
                        checked={isInput11Enabled}
                        onChange={() => handleCheckboxChange(11)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Cooking_60x60_01.png"
                        ref={taskelevenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknameeleven}
                      id="1.5"
                      style={{ fontWeight: isBold11 ? "bold" : "normal" }}
                    >
                     {translationCopy.en.householdtaskeleven}
                    </p>
                    <p style={{ display: "none" }} ref={taskelevenurl}>
                    #tip-two
                    </p>
                    <p style={{ display: "none" }} ref={taskelevencolor}>
                      #fac2c2
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset11}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput11 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput11 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput11Enabled}
                        onValueChange={handleValueChange21}
                        style={!isCheckWhole11}
                        inputValue={input21Value}
                        maxValue={21}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput11 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput11Enabled}
                        onValueChange={handleValueChange22}
                        inputValue={input22Value}
                        maxValue={90}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset11}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput11 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="choretwelve" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreTwelve"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole12
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole12
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreTwelve"
                        checked={isInput12Enabled}
                        onChange={() => handleCheckboxChange(12)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Gardening_60x60_01.png"
                        ref={tasktwelveimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknametwelve}
                      id="1.4"
                      style={{ fontWeight: isBold12 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtasktwelve}
                    </p>
                    <p style={{ display: "none" }} ref={tasktwelveurl}>
                    </p>
                    <p style={{ display: "none" }} ref={tasktwelvecolor}>
                      #b3dade
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset12}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput12 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput12 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput12Enabled}
                        onValueChange={handleValueChange23}
                        style={!isCheckWhole12}
                        inputValue={input23Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput12 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput12Enabled}
                        onValueChange={handleValueChange24}
                        style={!isCheckWhole12}
                        inputValue={input24Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset12}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput12 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorethirteen" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreThirteen"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole13
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole13
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreThirteen"
                        checked={isInput13Enabled}
                        onChange={() => handleCheckboxChange(13)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Entertaining_60x60_01.png"
                        ref={taskthirteenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamethirteen}
                      id="1.2"
                      style={{ fontWeight: isBold13 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtaskthirteen}
                    </p>
                    <p style={{ display: "none" }} ref={taskthirteenurl}>
                    #tip-ten
                    </p>
                    <p style={{ display: "none" }} ref={taskthirteencolor}>
                      #fcd1b3
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset13}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput13 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput13 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput13Enabled}
                        onValueChange={handleValueChange25}
                        style={!isCheckWhole13}
                        inputValue={input25Value}
                        maxValue={3}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput13 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput13Enabled}
                        onValueChange={handleValueChange26}
                        inputValue={input26Value}
                        maxValue={240}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset13}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput13 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorefourteen" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreFourteen"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole14
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole14
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreFourteen"
                        checked={isInput14Enabled}
                        onChange={() => handleCheckboxChange(14)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Pet__60x6001.png"
                        ref={taskfourteenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamefourteen}
                      id="1.1"
                      style={{ fontWeight: isBold14 ? "bold" : "normal" }}
                    >
                      {translationCopy.en.householdtaskfourteen}
                    </p>
                    <p style={{ display: "none" }} ref={taskfourteenurl}>
                    #tip-four
                    </p>
                    <p style={{ display: "none" }} ref={taskfourteencolor}>
                      #d9deee
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset14}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput14 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput14 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput14Enabled}
                        onValueChange={handleValueChange27}
                        style={!isCheckWhole14}
                        inputValue={input27Value}
                        maxValue={21}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput14 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput14Enabled}
                        onValueChange={handleValueChange28}
                        style={!isCheckWhole14}
                        inputValue={input28Value}
                        maxValue={60}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset14}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput14 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mobile-padding">
            <Col md={{ span: 10, offset: 1 }}>
              <div id="chorefifthteen" className="fullchores">
                <Row className="align-items-center">
                <Col md={2} xs={2} lg={1}>
                    <div className="checkmark">
                      <label
                        for="choreFifthteen"
                        class="customCheckbox"
                        style={{
                          border: isCheckWhole15
                            ? "2px solid #2089ff"
                            : "2px solid #000000",
                            backgroundImage:isCheckWhole15
                            ? "url('https://images.samsung.com/is/content/samsung/assets/uk/invisible_load/Icon_Tick_Blue_35x35_01.svg')"
                            : "url()",
                           
                        }}
                      ></label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="choreFifthteen"
                        checked={isInput15Enabled}
                        onChange={() => handleCheckboxChange(15)}
                      />
                    </div>
                  </Col>
                  <Col md={2} xs={2} lg={1}>
                    <div className="icons">
                      <img
                        src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/Icon_Exercise_60x60_01.png"
                        ref={taskfifteenimage}
                      />
                    </div>
                  </Col>
                  <Col md={6} xs={6} lg={5}>
                    <p
                      className="title"
                      ref={tasknamefifteen}
                      id="1"
                      style={{ fontWeight: isBold15 ? "bold" : "normal" }}
                    >
                   {translationCopy.en.householdtaskfifteen}
                    </p>
                    <p style={{ display: "none" }} ref={taskfifteenurl}>
                    #tip-eleven
                    </p>
                    <p style={{ display: "none" }} ref={taskfifteencolor}>
                    #fee8c8
                    </p>
                  </Col>
                  <Col xs={2} md={2} className="d-md-block d-lg-none d-xl-none ">
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset15}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput15 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }} md={{span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles"
                      style={{ color: isColorInput15 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.frequecyperweektext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input first">
                      <NumberInputFrequency
                        isDisabled={!isInput15Enabled}
                        onValueChange={handleValueChange29}
                        style={!isCheckWhole15}
                        inputValue={input29Value}
                        maxValue={7}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    className="d-lg-none d-xl-none"
                  >
                    <p
                      className="numberTitles last"
                      style={{ color: isColorInput15 ? "#000" : "#dddddd" }}
                    >
                      {translationCopy.en.timetext}
                    </p>
                  </Col>
                  <Col md={6} xs={6} lg={2}>
                    <div className="input second">
                      <NumberInputTime
                        isDisabled={!isInput15Enabled}
                        onValueChange={handleValueChange30}
                        style={!isCheckWhole15}
                        inputValue={input30Value}
                        maxValue={90}
                      />
                    </div>
                  </Col>
                  <Col lg={1} className="d-none d-sm-none  d-md-none d-lg-block" >
                    <button
                      value="reset"
                      className="resetbutton"
                      onClick={handleReset15}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29 29"
                        focusable="false"
                        aria-hidden="true"
                        style={{ fill: isColorInput15 ? "#000" : "#dddddd" }}
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_43"
                              data-name="Rectangle 43"
                              width="15.083"
                              height="17.812"
                              transform="translate(0 0)"
                              fill="none"
                            />
                          </clipPath>
                          <clipPath id="clip-Icon_Refresh_21x21">
                            <rect width="21" height="21" />
                          </clipPath>
                        </defs>
                        <g
                          id="Icon_Refresh_21x21"
                          clip-path="url(#clip-Icon_Refresh_21x21)"
                        >
                          <g
                            id="Group_347"
                            data-name="Group 347"
                            transform="translate(14.808 -1.184) rotate(56)"
                          >
                            <g
                              id="Group_123"
                              data-name="Group 123"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_45"
                                data-name="Path 45"
                                d="M7.541,34.088A7.541,7.541,0,1,1,7.541,19a.79.79,0,0,1,0,1.58,5.961,5.961,0,1,0,4.625,2.2.79.79,0,1,1,1.225-1,7.542,7.542,0,0,1-5.85,12.3"
                                transform="translate(0 -16.276)"
                              />
                              <path
                                id="Path_46"
                                data-name="Path 46"
                                d="M21.423,8.512A.79.79,0,0,1,20.757,7.3l2.27-3.572-3.573-2.27A.79.79,0,0,1,20.3.123L25.208,3.24,22.091,8.146a.789.789,0,0,1-.667.366"
                                transform="translate(-16.347 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="buttoncontainer">
            <Col lg={{ span: 3, offset: 3 }} md={12}>
              <button className="backtoliving" onClick={handleBacktoLiving}>
              {translationCopy.en.backtolivingdynamicbtn}
              </button>
            </Col>
            <Col lg={3} md={12}>
              <button className="calculateloadscrore" onClick={handleSubmit}>
              {translationCopy.en. calculateyourinvisibleloadbtn}
              </button>
            </Col>
          </Row>
        </Animated>
      </div>
      <div id="results" ref={resultsElement} style={{display:'none'}}>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Row>
            <Col md={12}>
              <h2> {translationCopy.en.invisibleloadscoretitle}</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4, offset: 2 }} md={6} xs={6}>
              <div className="graphresults">
                <DonutChart data={Newdata} colors={colors} />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 1 }} md={6} xs={6}>
              <Row className="align-items-center">
                <Col md={6} lg={8}>
                  <h3 className="totalscoretitle">{translationCopy.en.totalscoretext} <br/> <span className="outoftotaltext">({translationCopy.en.outoftotaltext})</span></h3>

                </Col>
                <Col md={6}  lg={4}>
               
                  <p className="totalscorenumber">  {Math.trunc(totalValue * 100) / 100}</p>
                </Col>
              </Row>
              <Row>
                <Col md={10}>
                <p className="totalscoredescriptions">{translationCopy.en.totalscoredescription}</p>
                </Col>
              </Row>
            </Col>
           
          </Row>
          <div className="legend">
            {legendData.map((legend, index) => (
              <div key={index}>
                <Row className="results-mobile-padding">
                  <Col  md={{ span: 8, offset: 2 }} xs={12}>
                    <Row className="align-items-center">
                      <div className="resultbox">
                        <Col md={1} xs="2">
                          <div
                            className="colorblock"
                            style={{ backgroundColor: legend.colour }}
                          ></div>
                        </Col>
                        <Col md={2} xs="2" className="clearpadding"> 
                          <div className="icons">
                            <img src={legend.image} />
                          </div>
                          
                        </Col>
                        <Col md={7} xs="6">
                          <p className="legendtaskname">
                            <a href={legend.url}>{legend.label}</a>
                          </p>
                        </Col>
                        <Col md={2} xs="2">
                          <p className="percentage">{legend.percentage}</p>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <div className="restart">
                <button onClick={handleBacktoHousehold}>{translationCopy.en.backtohouseholdtasksbtn}</button>
              </div>
            </Col>
          </Row>
          <Row className="motipscontainer">
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={6}>
                  <div className="moimage">
                    <img
                      src="https://images.samsung.com/is/image/samsung/assets/uk/invisible_load/mo_headshot.jpg"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg={{ span: 5, offset: 1 }} md={6}>
                  <h2 class="tipstitle">
                   {translationCopy.en.tipfromnotitle}
                  </h2>

                  {selectedOption === "1" && (
                    <p className="tipstext">
                     
                      {translationCopy.en.singleparenttip}
                    </p>
                  )}
                  {selectedOption === "2" && (
                    <p className="tipstext">
                     
                      {translationCopy.en.liveonetip}
                    </p>
                  )}
                  {selectedOption === "3" && (
                    <p className="tipstext">
                     
                      {translationCopy.en.livewithpartnertip}
                    </p>
                  )}
                  {selectedOption === "4" && (
                    <p className="tipstext">
                     
                      {translationCopy.en.livewithfamilytip}
                    </p>
                  )}
                  {selectedOption === "5" && (
                    <p className="tipstext">
                     
                      {translationCopy.en.livesharedtip}
                    </p>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="restart">
                <button onClick={handleBacktoStart}>{translationCopy.en.startagainbtn}</button>
              </div>
            </Col>
          </Row>
        </Animated>
      </div>
    </Container>
   
  );
}

export default Question;
