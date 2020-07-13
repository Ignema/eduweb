
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const videoSchema = new mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      title: String,
      img: String
    })

module.exports = mongoose.model("Video", videoSchema);