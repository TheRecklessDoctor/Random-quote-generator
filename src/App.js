import './App.css';
import React,{useState} from "react";
import {newQuote,listOfQuote} from './Assets/quotes';
import {QuoteBox} from "./Components/QuoteBox.js"

//main function
function App() {
  const [quote,setQuote] = useState(listOfQuote[0]);

  //query a quote and set the state for it
  let style = {backgroundColor:"white"};
  const handleClick = () => {
      let Nquote = newQuote();
      setQuote(Nquote);
      console.log(quote);
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      style = {
        backgroundColor:"#"+randomColor
      }
      document.body.style.backgroundColor = style.backgroundColor;
  }
  
  //function for handling tweeting
  const tweet = () => {
    let link = "https://twitter.com/intent/tweet";
    window.open(link);
  }

  return (
    <div className="Container" >
      <div className="quote-box">
        <QuoteBox click = {handleClick} quote = {quote} tweetbtn={tweet}/>
      </div>
      //footer containing name
      <footer className="about-me">
        <p>by dayan</p>
      </footer>
    </div>
  );
}

export default App;
