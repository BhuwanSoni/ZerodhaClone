const {model} = require('mongoose');
const {HoldingSchema} = require('../schemas/Holdingschemas');
const HoldingsModel = model('Holdings', HoldingSchema); 
module.exports = { HoldingsModel };