import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <img src={photo.src.landscap} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
