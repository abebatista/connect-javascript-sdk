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
var DateRange = require('./DateRange');




/**
 * The ShiftWorkday model module.
 * @module model/ShiftWorkday
 */

/**
 * Constructs a new <code>ShiftWorkday</code>.
 * A &#x60;Shift&#x60; search query filter parameter that sets a range of days that  a &#x60;Shift&#x60; must start or end in before passing the filter condition.
 * @alias module:model/ShiftWorkday
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ShiftWorkday</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ShiftWorkday} obj Optional instance to populate.
 * @return {module:model/ShiftWorkday} The populated <code>ShiftWorkday</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('date_range')) {
      obj['date_range'] = DateRange.constructFromObject(data['date_range']);
    }
      if (data.hasOwnProperty('match_shifts_by')) {
      obj['match_shifts_by'] = ApiClient.convertToType(data['match_shifts_by'], 'String');
    }
      if (data.hasOwnProperty('default_timezone')) {
      obj['default_timezone'] = ApiClient.convertToType(data['default_timezone'], 'String');
    }
    }
  return obj;
}

/**
 * Dates for fetching the shifts
 * @member {module:model/DateRange} date_range
 */
exports.prototype['date_range'] = undefined;
/**
 * The strategy on which the dates are applied.
 * @member {module:model/ShiftWorkday.MatchShiftsByEnum} match_shifts_by
 */
exports.prototype['match_shifts_by'] = undefined;
/**
 * Location-specific timezones convert workdays to datetime filters. Every location included in the query must have a timezone, or this field must be provided as a fallback. Format: the IANA timezone database identifier for the relevant timezone.
 * @member {String} default_timezone
 */
exports.prototype['default_timezone'] = undefined;


  /**
   * Allowed values for the <code>match_shifts_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MatchShiftsByEnum = {
    /**
     * value: "START_AT"
     * @const
     */
    "START_AT": "START_AT",
    /**
     * value: "END_AT"
     * @const
     */
    "END_AT": "END_AT",
    /**
     * value: "INTERSECTION"
     * @const
     */
    "INTERSECTION": "INTERSECTION"  };


module.exports = exports;



