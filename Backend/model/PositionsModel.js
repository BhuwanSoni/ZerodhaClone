const { model } = require('mongoose');
const {PositionsSchema} = require('../schemas/Positionsschemas');
const PositionsModel = model('Positions', PositionsSchema);
module.exports = { PositionsModel };