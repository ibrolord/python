# This makes a simple Calculator in Python3 than can add, subtract, multiply, and divide using functions
#Author: Bolaji Agunbiade
#Exception will ensure that the StdOut is as Neat as Possible

try:
  #Function to Add 2 Numbers
  def add(x, y):
      return x + y

  #Function to Subtract 2 Numbers
  def sub(x, y):
      return x - y 

  #Function to Multiply 2 Numbers
  def mult(x, y):
      return x * y

  #Function to Divide 2 Numbers
  def div(x, y):
      return x / y

  #Output Texts
  print("Select the Operations you want to Perform")
  print("Enter 'add' to add 2 numbers \n Enter 'sub' to Subtract 2 Numbers \n Enter 'div' to Divide 2 Numbers \n ")

  #Take User Inputs
  op = input('Enter Choice(add, sub, mult, div): ')
  print("You want to" , str(op))

  #Assign numbers to Variables; Wrap as integer - No Floats
  num1 = int(input("Enter your First Number: "))
  num2 = int(input("Enter your Second Number: "))

  #Begin Logic
  if op == 'add':
      print(num1,"+",num2,"=", add(num1,num2))

  elif op == 'sub':
      print(num1,"-",num2,"=", sub(num1,num2))

  elif op == 'mult':
      print(num1,"-",num2,"=", mult(num1,num2))

  elif op == 'div':
      print(num1,"-",num2,"=", div(num1,num2))

  else:
      print("I don't know what you typed")

except Exception as e:
    print(f"You must have done something wrong, Error is: '{e}'" )



