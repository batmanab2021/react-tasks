
const Picture = (props) => {
    return (
      <div className="picture">
        <img src={props.src}alt=""></img>
        <span>{props.text}</span>
      </div>
    );
  };
  
const Carousel  = () => {
    
     
    
    return (
        <div classname="carousel">
            
               
          <Picture  text="picture1" src="https://m.media-amazon.com/images/M/MV5BY2NmNzEzN2QtMTBhOC00OGY1LThkMGMtZTIwMTE3MmUyNDc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"/>
          <Picture  text="picture2" src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"/>
          
          </div>
   
          
  );
}


export default Carousel;