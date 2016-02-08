options( digits = 16 )
library( jsonlite )
library( truncnorm )

a = -100
b = 100
mu = 80
sigma = 10
x = seq( -110, 110, 0.5 )
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

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
