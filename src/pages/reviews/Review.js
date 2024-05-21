import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import styles from "../../styles/Review.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import ReviewEditForm from "./ReviewEditForm";


const Review = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, id, setProduct, setReviews } = props;
  
  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setProduct((prevProduct) => ({
        results: [
          {
            ...prevProduct.results[0],
            reviews_count: prevProduct.results[0].reviews_count - 1,
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));
    } catch (err) {}
  };
  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePicture src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <ReviewEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setReviews={setReviews}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
        )}
      </Media>
      </>
  );
};

export default Review;