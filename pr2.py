inv = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}

def displayInventory(inven):
	print("Inventory")
	item_total = 0
	for k, v in inven.items():
		print(str(v) + ' ' + k)
		item_total += v	
	print("Total numbers of items: " + str(item_total))

displayInventory(inv)
