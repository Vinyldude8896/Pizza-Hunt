const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

module.exports = router;

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

  router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);