import React, { useState } from "react";
import { Media, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import styles from "../../styles/Review.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import ReviewEditForm from "./ReviewEditForm";

const Review = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    like_review_id,
    likes_count,  
    setProduct,
    setReviews
  } = props;
  
  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [liked, setLiked] = useState(!!like_review_id);
  const [likesCount, setLikesCount] = useState(likes_count);  // Updated field name

  const handleDelete = async () => {
    try {
      // console.log(`Attempting to delete review with ID: ${id}`);
      await axiosRes.delete(`/reviews/${id}`);
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
    } catch (err) {
      // console.error(`Failed to delete review with ID: ${id}`, err);
    }
  };

  const handleLike = async () => {
    try {
      if (liked) {
        // console.log(`Unliking review with ID: ${id}`);
        await axiosRes.delete(`/likereview/${like_review_id}/`);
        setLikesCount(likesCount - 1);
        setReviews((prevReviews) => ({
          ...prevReviews,
          results: prevReviews.results.map((review) => 
            review.id === id ? { ...review, likes_count: likesCount - 1, like_review_id: null } : review
          ),
        }));
      } else {
        // console.log(`Liking review with ID: ${id}`);
        const { data } = await axiosRes.post(`/likereview/`, { review: id });
        setLikesCount(likesCount + 1);
        setReviews((prevReviews) => ({
          ...prevReviews,
          results: prevReviews.results.map((review) => 
            review.id === id ? { ...review, likes_count: likesCount + 1, like_review_id: data.id } : review
          ),
        }));
      }
      setLiked(!liked);
    } catch (err) {
      // console.error(`Failed to like/unlike review with ID: ${id}`, err);
    }
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
          <div className={styles.LikesCount}>
            <Button onClick={handleLike} variant="outline-primary" size="sm">
              {liked ? "Unlike" : "Like"}
            </Button>
            <span className={styles.LikesNumber}>{likesCount} {likesCount === 1 ? "like" : "likes"}</span>
          </div>
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
        )}
      </Media>
    </>
  );
};

export default Review;