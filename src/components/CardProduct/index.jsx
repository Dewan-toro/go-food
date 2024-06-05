import React from "react";
import { config } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Card, Button } from "react-bootstrap";
import Tag from "../Tag";
import { useDispatch } from "react-redux";
import { toggleTags } from "../../app/features/Product/actions";
import { formatRupiah } from "../../utils";
import styles from "./CardProduct.module.css";

export default function CardProduct({ item, onAddToCart }) {
  const dispatch = useDispatch();
  return (
    <Card className={styles.cardProduct}>
      <Card.Img
        variant="top"
        src={`${config.api_host}/images/products/${item.image_url}`}
        style={{
          maxHeight: "180px",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "18px",
          }}
        >
          {item.name}
        </Card.Title>
        <Card.Subtitle
          className=" text-muted"
          style={{
            fontSize: "13px",
          }}
        >
          {item.category && item.category.name}
        </Card.Subtitle>
        <Tag items={item.tags} onClick={(tag) => dispatch(toggleTags(tag))} />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Text
            style={{
              fontWeight: "600",
            }}
          >
            {formatRupiah(item.price)}
          </Card.Text>
          <Button variant="success" onClick={() => onAddToCart()}>
            <FontAwesomeIcon icon={solid("cart-plus")} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
