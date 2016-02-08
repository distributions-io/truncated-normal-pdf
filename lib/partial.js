'use strict';

// FUNCTIONS //

var exp = require( 'math-exp' );
var pow = require( 'math-power' );
var sqrt = require( 'math-sqrt' );
var Phi = require( 'distributions-normal-cdf' );


// VARIABLES //

var PI = require( 'const-pi' );
var PINF = require( 'const-pinf-float64' );


// PARTIAL //

/**
* FUNCTION: partial( a, b, mu, sigma )
*	Partially applies endpoints `a` and `b`, mean  `mu` and standard deviation `sigma` and returns a function for evaluating the probability density function (PDF) for a truncated normal distribution.
*
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @returns {Function} PDF
*/
function partial( a, b, mu, sigma ) {
	var s2 = pow( sigma, 2 );
	var A = 1 / ( sqrt( 2 * s2 * PI ) );
	var B = -1 / ( 2 * s2 );
	/* jshint newcap: false */
	var C = Phi( (b-mu)/sigma ) - Phi( (a-mu)/sigma );

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a truncated normal distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		if ( x < a || x > b ) {
			return 0;
		}
		return A * exp( B * pow( x - mu, 2 ) ) / C;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
