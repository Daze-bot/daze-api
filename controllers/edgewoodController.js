const EdgewoodAlert = require('../models/edgewoodAlert');
const asyncHandler = require('express-async-handler');

exports.get_all_alerts = asyncHandler(async (req, res, next) => {
  const allAlerts = await EdgewoodAlert.find().sort({ createdAt: -1 }).exec();

  if (allAlerts == null) {
    res.json({
      "success": false,
      "message": "Data not found",
      "data": {}
    });
  } else {
    res.json({
      "success": true,
      "message": "Data found",
      "data": allAlerts
    })
  }
});

exports.get_recent_alert = asyncHandler(async (req, res, next) => {
  const recentAlert = await EdgewoodAlert.findOne().sort({ createdAt: -1 }).exec();

  if (recentAlert == null) {
    res.json({
      "success": false,
      "message": "Data not found",
      "data": {}
    });
  } else {
    res.json({
      "success": true,
      "message": "Data found",
      "data": recentAlert
    })
  }
});

exports.new_alert = asyncHandler(async (req, res, next) => {
  const newAlert = new EdgewoodAlert({
    text: req.body.alertText
  });

  await newAlert.save();
  res.json({
    "success": true,
    "message": "Alert created successfully",
    "data": newAlert
  })
});