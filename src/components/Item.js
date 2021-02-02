import React from "react";
import notFound from "../assets/img/point-dinterrogation.jpg";
const Item = (props) => {
  const { item, key } = props;
  const { owner } = item;

  let linkImageAvatar = "";
  let linkImageCover = "";
  if (owner?.account?.avatar?.secure_url) {
    if (Array.isArray(owner.account.avatar.secure_url)) {
      linkImageAvatar = owner.account.avatar.secure_url[0];
    }
    if (owner?.account?.avatar?.secure_url) {
      if (owner.account.avatar.secure_url) {
        linkImageAvatar = owner.account.avatar.secure_url;
      }
    }
  }

  linkImageCover = notFound;
  //   if (item.product_pictures) {
  //     if (
  //       Array.isArray(item.product_pictures) &&
  //       item.product_pictures.length > 0
  //     ) {
  //       linkImageCover = item.product_pictures[0].secure_url;
  //     } else {
  //       if (item.product_pictures.secure_url) {
  //         linkImageCover = item.product_pictures.secure_url;
  //       }
  //     }
  //   }
  //   if (item.product_pictures) {
  //     //   if (item.product_pictures[0]?.secure_url) {
  //     if (Array.isArray(item.product_pictures)) {
  //       if (item.product_pictures.length > 0) {
  //         linkImageCover = item.product_pictures[0].secure_url;
  //       } else {else {
  //           linkImageCover = notFound;
  //         }
  //       }
  //     } else{

  //         if (item.product_pictures.secure_url) {
  //             linkImageCover = item.product_pictures.secure_url;
  //           }
  //     }
  //   } else {
  //     linkImageCover = notFound;
  //   }
  console.log(linkImageCover);

  return (
    <div className="itemDetails">
      <div className="authorArea">
        <div className="authorPortrait">
          <img
            className="imgAvatar"
            src={linkImageAvatar}
            className="imgAvatar"
          />
        </div>

        <div className="authorName">{owner.account.username}</div>
      </div>
      <div className="divItemCover">
        <img className="itemCover" src={item.product_image.secure_url} />
      </div>
      <div className="itemDetailsLine1"></div>
      <div className="itemDetailsLine2"></div>
      <div className="itemDetailsLine3"></div>
      {item.product_name}
    </div>
  );
};

export default Item;
