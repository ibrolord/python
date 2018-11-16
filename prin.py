def printa(itemsD, leftW, rightW):
	print('PICNIC ITEMS'.center(leftW + rightW, '-'))
	for k, v in itemsD.items():
		print(k.ljust(leftW, '.') + str(v).rjust(rightW))

picnic = {'sand': 4, 'apples': 12, 'cups': 4, 'cookies': 8000}
printa(picnic, 12, 5)
printa(picnic, 20, 6)
