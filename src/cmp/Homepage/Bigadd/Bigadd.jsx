import "./Bigadd.css";
import { Button } from "react-bootstrap";

const Bigadd = ()=>{
  const design = (
    <>
      <div className="video-box">
        <video width="100%" autoPlay muted loop>
          <source src="header.mp4"></source>
        </video>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div>
            <h2 className="text-light">Introducing</h2>
            <h1 className="text-white large-title">React Tutorial</h1>
            <h2 className="text-light">By Wap Institute</h2>
            <Button className="btn btn-primary py-2 px-4 mt-4">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
  return design;
}

export default Bigadd;
