import React,{useState} from "react";
import { FaQuoteLeft} from "react-icons/fa";

function QuoteBox(props){
    return(
        <div id="sub-container">
        <div className="quote-text">
            <Quote quote = {props.quote} />
        </div>
        //button section
        <div className="buttons ">
        <div className='buttonset1'/>
         <div className='buttonSet2'>
             <button type="button" className="btn btn-primary btn-sm" id="tweet-quote" onClick={props.tweetbtn}>Tweet</button>
             <button type="button" className="btn btn-primary btn-sm" >Tumblr</button>
         </div>
         <div className="buttonSet3" />
         <div className='buttonSet4'>
             <button type="button" className="btn btn-primary btn-sm" onClick={props.click} id="new-quote">New Quote</button>
         </div>
        </div>
        </div>
    );
}

//component containing quote text and author
const Quote = (props) => {
    return(
        <div>
            <div id="text">
            <FaQuoteLeft id='quotesub1'/>
             <p id='quotesub2'>{props.quote.text}</p>
            </div>
            <div id="author">
             <p>-{props.quote.author}</p>
            </div>
        </div>
    )
}


export {QuoteBox}