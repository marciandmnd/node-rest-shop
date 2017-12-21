const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /orders'
  });
});

router.post('/:orderId', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created!'
  })
});

router.get('/:orderId', (req, res, next) => {
  res.status(201).json({
    message: 'Order was fetched!',
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(201).json({
    message: 'Order was deleted!',
    orderId: req.params.orderId
  });
});

module.exports = router;