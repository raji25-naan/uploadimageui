const mongoose = require('mongoose');
 


 const Galleryschema = mongoose.Schema({
  id: String,
  imageUrl: String,
  imageTitle: String,
  imageDesc: String,
  uploaded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Gallery', GallerySchema);