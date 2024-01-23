import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const PuanlamaModal = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal1"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Puanla</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Rating
              onClick={handleRating}
              disableFillHover
              initialValue={ratingValue}
            />
            {/* <div className="form-group">
              <select className="form-select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button type="button" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuanlamaModal;
