'use strict';

// MODULES //

var partial = require( './partial.js' );


// PDF //

/**
* FUNCTION: pdf( out, arr, a, b, mu, sigma, accessor )
*	Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, mean `mu` and standard deviation `sigma` using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function pdf( y, x, a, b, mu, sigma, clbk ) {
	var len = x.length,
		fcn,
		v, i;

	fcn = partial( a, b, mu, sigma );
	for ( i = 0; i < len; i++ ) {
		v = clbk( x[ i ], i );
		if ( typeof v === 'number' ) {
			y[ i ] = fcn( v );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
