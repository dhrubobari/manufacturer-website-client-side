import React from 'react';

const AddReview = () => {
    return (
        <div>
            <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 border shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-700">Add Review</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <textarea class="textarea w-80 h-40 textarea-bordered" placeholder="Comment"></textarea>
            <p class="mx-auto text-left">give rating</p>
            <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            </div>
            <input className="btn bg-green-500 w-full border-0 mt-5 max-w-xs" value="comment" type="submit" />
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddReview;