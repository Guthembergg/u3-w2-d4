import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { HouseFill, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Favourites = () => {
  const content = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();
  function createMarkup(value) {
    return {
      __html: value,
    };
  }
  return (
    <>
      <Row className="d-flex align-items-center justify-content-between w-100">
        <h2 className="m-3">Your favourites</h2>
        <Link to="/">
          <HouseFill />
        </Link>
      </Row>

      <ListGroup>
        {content.map((el, i) => {
          return (
            <ListGroup.Item key={`key-${i}`}>
              <Row className="flex-d align-items-center">
                <Badge
                  variant="secondary"
                  style={{ fontWeight: "700", fontSize: "20px" }}
                >
                  {i + 1}
                </Badge>
                <Col>
                  <p style={{ fontWeight: "700" }}>{el.title}</p>
                  <a href={el.url} alt="link">
                    Job url link
                  </a>
                  <p>
                    {el.company_name} - {el.job_type}
                  </p>

                  {/* <p dangerouslySetInnerHTML={createMarkup(el.description)}></p> */}
                  <p>{el.candidate_required_location}</p>
                </Col>
                <Col>
                  <X
                    onClick={() => {
                      dispatch({
                        type: "REMOVE",
                        payload: el,
                      });
                      dispatch({
                        type: "REMOVE_ID",
                        payload: el._id,
                      });
                    }}
                  ></X>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Favourites;
