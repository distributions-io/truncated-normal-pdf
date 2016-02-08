options( digits = 16 )
library( jsonlite )
library( truncnorm )

a = -3
b = 3
mu = 1
sigma = 1
x = c( -2, -1, 0, 1, 2 )
y = dtruncnorm( x, a, b, mu, sigma )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	mu = mu,
	sigma = sigma,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
