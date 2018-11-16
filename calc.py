#!/usr/bin/env python3.6

while True:
	print("Options:")
	print("Enter 'add' to add 2 numbers \n Enter 'subtract' to sub 2 # \n Enter 'divide' to dividwe 2 #s \n Enter 'quit' to quit")
	userin = input(": ")
	
	if userin == "quit":
		break
	elif userin == "add":
		num1 = float(input("Enter a number: "))
		num2 = float(input("Enter another number: "))
		result = str(num1 + num)
		print("The answer is " + result)

	elif userin == "subtract":
		num1 = float(input("Enter a number: "))
		num2 = float(input("Enter another number: "))
		result = str(num1 - num)
		print("The answer is " + result)

	elif userin == "multiply":
		num1 = float(input("Enter a number: "))
		num2 = float(input("Enter another number: "))
		result = str(num1 * num)
		print("The answer is " + result)

	elif userin == "divide":
		num1 = float(input("Enter a number: "))
		num2 = float(input("Enter another number: "))
		result = str(num1 / num)
		print("The answer is " + result)
	else:
		print("Unknown input")

