import React from "react";
import styles from "../../styles/Product.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ProfilePicture from '../../components/ProfilePicture'
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";


const Product = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    link,
    price,
    reviews_count,
    likes_count,
    unlikes_count,
    like_id,
    unlike_id,
    title,
    content,
    image,
    updated_at,
    productPage,
    setProducts,
  } = props;



  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/products/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/products/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { product: id });
      setProducts((prevProducts) => ({
        ...prevProducts,
        results: prevProducts.results.map((product) => {
          return product.id === id
            ? { ...product, likes_count: product.likes_count + 1, like_id: data.id }
            : product;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`likes/${like_id}/`);
      setProducts((prevProducts) => ({
        ...prevProducts,
        results: prevProducts.results.map((product) => {
          return product.id === id
            ? { ...product, likes_count: product.likes_count - 1, like_id: null }
            : product;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDislike = async () => {
    try {
      const { data } = await axiosRes.post("unlikes/", { product: id });
      setProducts((prevProducts) => ({
        ...prevProducts,
        results: prevProducts.results.map((product) => {
          return product.id === id
            ? { ...product, unlikes_count: product.unlikes_count + 1, unlike_id: data.id }
            : product;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUndislike = async () => {
    try {
      await axiosRes.delete(`/unlikes/${unlike_id}/`);
      setProducts((prevProducts) => ({
        ...prevProducts,
        results: prevProducts.results.map((product) => {
          return product.id === id
            ? { ...product, unlikes_count: product.unlikes_count - 1, unlike_id: null }
            : product;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Product}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <ProfilePicture src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && productPage && "..."(
            <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              />)}
          </div>
        </Media>
        <div className="text-center my-2">
          {price && <span className="font-weight-bold">Price: ${price}</span>}
        </div>
      </Card.Body>
      <Link to={`/products/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.Bar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own product!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : unlike_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like a product you disliked!</Tooltip>}
            >
              <span>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
            </OverlayTrigger>
          ): like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like Product!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't unlike your own product!</Tooltip>}
            >
              <i className="far fa-thumbs-down" />
            </OverlayTrigger>
          ) : like_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't dislike a product you liked!</Tooltip>}
            >
              <span>
                <i className={`far fa-thumbs-down ${styles.HeartOutline}`} />
              </span>
            </OverlayTrigger>
          ): unlike_id ? (
            <span onClick={handleUndislike}>
              <i className={`fas fa-thumbs-down ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleDislike}>
              <i className={`far fa-thumbs-down ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to unlike Product!</Tooltip>}
            >
              <i className="far fa-thumbs-down" />
            </OverlayTrigger>
          )}
          {unlikes_count}
          <Link to={`/products/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {reviews_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;