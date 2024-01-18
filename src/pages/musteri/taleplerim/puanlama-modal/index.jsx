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
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Puanla</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <Rating
              onClick={handleRating}
              disableFillHover
              initialValue={ratingValue}
            />
            {/* <div class="form-group">
              <select class="form-select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button type="button" class="btn btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuanlamaModal;
