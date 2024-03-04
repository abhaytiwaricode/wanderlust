const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const reviewController = require('../controllers/reviews.js');

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require('../middleware.js');

// POST Review Route
router.post(
  '/',
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delete Review Route
router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
