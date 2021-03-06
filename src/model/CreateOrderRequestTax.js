/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The CreateOrderRequestTax model module.
 * @module model/CreateOrderRequestTax
 */

/**
 * Constructs a new <code>CreateOrderRequestTax</code>.
 * __Deprecated__: Please use the [OrderLineItemTax](#type-orderlineitemtax) type in the order field of [CreateOrderRequest](#type-createorderrequest) instead.  Represents a tax that can apply to either a single line item or an entire order.
 * @alias module:model/CreateOrderRequestTax
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>CreateOrderRequestTax</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequestTax} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequestTax} The populated <code>CreateOrderRequestTax</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
    }
  return obj;
}

/**
 * Only used for catalog taxes. The catalog object ID of an existing [CatalogTax](#type-catalogtax).  Do not provide a value for this field if you provide values in other fields for an ad hoc tax.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * Only used for ad hoc taxes. The tax's name.  Do not provide a value for this field if you set `catalog_object_id`.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Only used for ad hoc taxes. Indicates the calculation method used to apply the line item tax.  Default: `ADDITIVE`; See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
 * @member {module:model/CreateOrderRequestTax.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * Only used for ad hoc taxes. The percentage of the tax, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UNKNOWN_TAX"
     * @const
     */
    "UNKNOWN_TAX": "UNKNOWN_TAX",
    /**
     * value: "ADDITIVE"
     * @const
     */
    "ADDITIVE": "ADDITIVE",
    /**
     * value: "INCLUSIVE"
     * @const
     */
    "INCLUSIVE": "INCLUSIVE"  };


module.exports = exports;



