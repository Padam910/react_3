import "./Benifits.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";

const data = [
  {
    id: "key-1",
    icon: "fa fa-home",
    title: "Interior Sketch",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
  },
  {
    id: "key-2",
    icon: "fa fa-edit",
    title: "Interior Sketch",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
  },
  {
    id: "key-3",
    icon: "fa fa-share",
    title: "Interior Sketch",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
  }
];

const List = (allData)=>{
  const design = (
    <>
      <div className="d-flex mb-4">
        <div>
          <div className="icon-box d-flex justify-content-center align-items-center">
            <i className={allData.listData.icon}></i>
          </div>
        </div>
        <div className="px-3">
          <h5>{allData.listData.title}</h5>
          <p>{allData.listData.desc}</p>
        </div>
      </div>
    </>
  );
  return design;
}

const Benifits = ()=>{
  const design = (
    <>
      <Container>
        <Row>
          <Col md="5" className="px-4 d-flex flex-column justify-content-center">
            {
              data.map((item)=>{
                return <List listData={item} key={item.id} />
              })
            }
          </Col>
          <Col md="7" className="px-4">
            <img alt="man" src="man.jpg" width="80%" className="rounded-circle man-pic" />
          </Col>
        </Row>
      </Container>
    </>
  );
  return design;
}

export default Benifits;
