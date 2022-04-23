// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
});

// Categories have many Products / hasMany / 

// Products belongToMany Tags (through ProductTag) / belongsToMany

// Tags belongToMany Products (through ProductTag) / belongsToMany

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
