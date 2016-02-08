options( digits = 16 )
library( jsonlite )
library( truncnorm )

a = -8
b = 13
mu = 9
sigma = 6
x = seq( -9, 15, 1 )
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

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
