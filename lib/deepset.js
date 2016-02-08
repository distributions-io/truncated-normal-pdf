'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	partial = require( './partial.js' );


// PDF //

/**
* FUNCTION: pdf( arr, a, b, mu, sigma, path[, sep] )
*	Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, mean  `mu` and standard deviation `sigma` for each array element and sets the input array.
*
* @param {Array} arr - input array
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function pdf( x, a, b, mu, sigma, path, sep ) {
	var len = x.length,
		opts = {},
		dget,
		dset,
		fcn,
		v, i;
	if ( arguments.length > 6 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		fcn = partial( a, b, mu, sigma );
		for ( i = 0; i < len; i++ ) {
			v = dget( x[ i ] );
			if ( typeof v === 'number' ) {
				dset( x[i], fcn( v ) );
			} else {
				dset( x[i], NaN );
			}
		}
	}
	return x;
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
