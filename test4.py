#!/usr/bin/env python3.6
#def max(x, y):
#	if x >= y:
#		return x
#	else:
#		return y

#print(max(4, 7))
#z = max(8, 5)
#print(z)

def add(x, y):
	return x + y

def dor(func, x, y):
	return func(func(x, y), func(x, y))

a = 5
b = 10

print(dor(add, a, b))
