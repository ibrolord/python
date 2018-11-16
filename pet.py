pet = ['ola', 'olu', 'ayo']
print('Enter a pet name:')
name = input()
if name not in pet:
	print('I do not have pet')
else:
	print(name + ' is my pet')
