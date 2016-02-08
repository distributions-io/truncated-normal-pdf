'use strict';

// FUNCTIONS //

var exp = require( 'math-exp' );
var pow = require( 'math-power' );
var sqrt = require( 'math-sqrt' );
var Phi = require( 'distributions-normal-cdf' );


// CONSTANTS //

var PI = require( 'const-pi' );
var PINF = require( 'const-pinf-float64' );


// PDF //

/**
* FUNCTION: pdf( x, a, b, mu, sigma )
*	Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, location parameter `mu` and scale parameter `sigma` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, a, b, mu, sigma ) {
	if ( x < a || x > b ) {
		return 0;
	}
	if ( sigma === 0 ) {
		return x === mu ? PINF : 0;
	}
	var s2 = pow( sigma, 2 );
	var A = 1 / ( sqrt( 2 * s2 * PI ) );
	var B = -1 / ( 2 * s2 );

	/* jshint newcap: false */
	var C = Phi( (b-mu)/sigma ) - Phi( (a-mu)/sigma );

	return A * exp( B * pow( x - mu, 2 ) ) / C;
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
