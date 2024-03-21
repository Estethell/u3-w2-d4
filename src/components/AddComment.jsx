import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(props.asin);

  useEffect(() => {
    setElementId(props.asin);
  }, [props.asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OWU2ZjA0NTg5ZjAwMTk0OGU1YmQiLCJpYXQiOjE3MTA4NTc4MzksImV4cCI6MTcxMjA2NzQzOX0.BSotV1Bzo4OFxIJoRYB6sZkNh2CMOsE0paL3dkCUvE4",
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");

        setComment("");
        setRate(1);
        setElementId(props.asin);
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control as="select" value={rate} onChange={(e) => setRate(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
