options( digits = 16 )
library( jsonlite )
library( truncnorm )

a = -20
b = 20
mu = 7
sigma = 2
x = seq( -30, 30, 0.25 )
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

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
