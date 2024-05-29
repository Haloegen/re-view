import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from '../../styles/ReviewCreateEditForm.module.css'
import ProfilePicture from "../../components/ProfilePicture";
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm(props) {
  const { product, setProduct, setReviews, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/reviews/", {
        content,
        product,
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: [data, ...prevReviews.results],
      }));
      setProduct((prevProduct) => ({
        results: [
          {
            ...prevProduct.results[0],
            reviews_count: prevProduct.results[0].reviews_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfilePicture src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="Leave a review"
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Commit
      </button>
    </Form>
  );
}

export default ReviewCreateForm;
