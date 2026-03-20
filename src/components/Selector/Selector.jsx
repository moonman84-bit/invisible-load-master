import React, { useState, useRef, useEffect } from 'react';
import './Selector.css';

function RatingComponent(props) {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSecondRating,setSecondSelectedRating] = useState(null);
  const rateoneRef = useRef(null);
  const ratetwoRef = useRef(null);
  const generateRef = useRef(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    ratetwoRef.current.style.display = 'flex';
    rateoneRef.current.style.display = 'none';
    


  };

  

  const handleSecondRatingClick = (secondrating) => {
    setSecondSelectedRating(secondrating);
    ratetwoRef.current.style.display = 'none';
    generateRef.current.style.display = 'flex';

  };

  let [dataToSend, setDataToSend] = useState('');

  
  const sendDataToParent = () => {
    // Call the function passed from the parent with the data
    props.sendDataToParent(dataToSend);
    
  };
  dataToSend = selectedRating + selectedSecondRating;
  return (
    <>
    
   <div id="ratinglayerone" ref={rateoneRef}>
      <h2>How do you feel about dogs (10 - Excellent, 1 - Don't like)</h2>
      <div>
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleRatingClick(index + 1)}
            className={selectedRating === index + 1 ? "selected" : ""}
          >
            {index + 1}
          </button>
        ))} 
        <div>
       
      
      </div>
      </div>

      {selectedRating !== null && (
        <p>You selected: {selectedRating}</p>
      )}
  </div>
    <div id="ratinglayertwo" ref={ratetwoRef} style={{ display: 'none' }}>
    <h2>How do you feel about cats (10 - Excellent, 1 - Don't like)</h2>
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleSecondRatingClick(index + 1)}
          className={selectedSecondRating === index + 1 ? "selected" : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
    {selectedRating !== null && (
      <p>You selected: {selectedSecondRating}</p>
    )}
  </div>
  <div id="ratinglayertwo" ref={ratetwoRef} style={{ display: 'none' }}>
    <h2>How do you feel about cats (10 - Excellent, 1 - Don't like)</h2>
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleSecondRatingClick(index + 1)}
          className={selectedSecondRating === index + 1 ? "selected" : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
    {selectedRating !== null && (
      <p>You selected: {selectedSecondRating}</p>
    )}
  </div>
  <div id="ratinglayertwo" ref={ratetwoRef} style={{ display: 'none' }}>
    <h2>How do you feel about cats (10 - Excellent, 1 - Don't like)</h2>
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleSecondRatingClick(index + 1)}
          className={selectedSecondRating === index + 1 ? "selected" : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
    {selectedRating !== null && (
      <p>You selected: {selectedSecondRating}</p>
    )}
  </div>

  <div id='generateresults' ref={generateRef} style={{ display: 'none' }}>
      <h2>Thanks for answering. Now it's time for the results</h2>
      <p>Click the button to get you score</p>
      <button onClick={sendDataToParent}>Get results</button>
  </div>


  </>

  );
}

export default RatingComponent;
