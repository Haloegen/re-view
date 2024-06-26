import React, { useState, useRef } from "react";
import Upload from "../../assets/upload.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/ProductCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ProductCreateForm() {
  const [errors, setErrors] = useState({});

  const [productData, setProductData] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
  });

  const { title, content, image, price } = productData;
  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setProductData({
        ...productData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("price", price);

    try {
      const { data } = await axiosReq.post("/products/", formData);
      history.push(`/products/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center mt-3">
      <Form.Group>
        <Form.Label className="h5">Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="mb-3"
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label className="h5">Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          className="mb-3"
        />
      </Form.Group>
      {errors?.price?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className="h5">Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
          className="mb-3"
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} me-2`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload an image"
                    />
                  </Form.Label>
                )}

                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
            </Container>
            <Container className={`${appStyles.Content} mt-4`}>
              {textFields}
            </Container>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default ProductCreateForm;
