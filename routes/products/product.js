/**
 * Created by gnu_d on 18.5.17.
 */

var Product = require("../../models/product").Product;
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
let auditlog = require("../../lib/auditlib");

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    return res.status(code || 500).json({"error": message});
}

// Generic error handler used by all endpoints.
function handleSuccess(res, reason, message, code) {
    return res.status(code || 200).json({"success": message, "data": reason});
}

var list = function(req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            return handleError(res, err.message, "Products listing failed ");
        } else {
            // Transform product
            products.map(function(productItem){
                // TODO: add all the required properties to be manipulated
                delete productItem._doc.SKU; // delete property example
                delete productItem._doc.buy_price; // delete property example

                productItem._doc.customValue = 1; // create new property example
                productItem._doc.packaging = 1; // edit property example

                return productItem._doc;
            });

            return handleSuccess(res, products, "Products listed", 200)
        }
    });
};

var create = function(req, res) {
    var productData = req.query.data ? JSON.parse(req.query.data): null;
    // TODO: Validate params

    var product = new Product(productData);
    product.save(function(err, productFound) {
        if (err) {
            return handleError(res, err.message, "Product creation failed ");
        } else {
            return handleSuccess(res, productFound.toJSON(), "Product created successfully", 200)
        }
    });
};

var read = function(req, res) {
    var productId = req.params.id;
    Product.findOne({_id: new ObjectID(productId)}, function(err, productFound) {
        if (err) {
            return handleError(res, err.message, "Failed to read  product");
        } else {
            // TODO: Transform product
            products.map(function(productItem){});
            return handleSuccess(res, productFound.toJSON(), "read success", 200)
        }
    });

};

var update = function(req, res) {
    var productId = req.params.id;
    var action = req.query.action;
    var productData = req.query.data ? JSON.parse(req.query.data): null;
    var stock = req.query.stock ? req.query.stock : null;

    // TODO: Validate params

    Product.findOne({_id: new ObjectID(productId)}, function(err, productFound) {
        var processInventory = function() {
            oldStock = productFound._doc.inventory.stock;
            productFound._doc.inventory.stock = stock;

            let productUpdated = productFound.toJSON();
            delete productUpdated._id;

            Product.updateOne(productFound._id.toString(), productUpdated, function(err, doc) {
                if (err) {
                    // TODO localize error message
                    return handleError(res, err.message, "Failed to update product stock");
                }

                auditlog.debug({
                    _id: new ObjectID(),
                    logType: 'Action',
                    action: "Stock updated",
                    recordId: productFound._id.toString(),
                    old: oldStock,
                    new: stock,
                });

                return handleSuccess(res, "", "stock update success", 200);
            });
        };

        var processProductUpdate = function() {
            // TODO: clean productData properties before update

            Product.updateOne(productFound._id.toString(), productData, function(err, doc) {
                if (err) {
                    // TODO localize error message
                    return handleError(res, err.message, "Failed to update product data");
                }

                auditlog.debug({
                    _id: new ObjectID(),
                    logType: 'Action',
                    action: "Updated product",
                    recordId: productFound._id.toString(),
                    old: productFound.toJSON(),
                    new: productData,
                });

                return handleSuccess(res, "", "product update success", 200);
            });
        };

        if (err) {
            return handleError(res, err.message, "Failed to find product");
        } else {
            switch (action) {
                case "inventory":
                    return processInventory();
                    break;
                case "product":
                    return processProductUpdate();
                    break;
                default:
                    return handleError(res, null, "Failed to update product - unknown reason");
                    break;
            }
        }
    });
};

var remove = function(req, resne) {
    var productId = req.params.id;

    // TODO: Validate params

    Product.remove({ _id: new ObjectID(productId)}, function(err, result) {
        // TODO: error handling not good
        if (err) {
            // TODO localize error message
            return handleError(res, err.message, "Failed to remove product");
        }
        else {
            return handleSuccess(res,"", "Product was removed", 200);
        }
    });
};

module.exports.list = list;
module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.delete = remove;
