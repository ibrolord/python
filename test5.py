#!/usr/bin/env python3.6

import os
import argparse
import sys

parser = argparse.ArgumentParser()
parser.add_argument('url', help='url to enter')
parser.add_argument('destination', help='destination to go')
parser.add_argument('--content-type', '-c', default='html', choices=['html', 'json'], help='the content-type of tje URl; being requested')

args = parser.parse_args()

res = requests.gets(args.url)

if res.status_code >= 400:
	print(f"Error code received: {res.status_code}")
	sys.exit(1)

if args.content_type == 'json':
	try:
		content = json.dumps(res.json())
	except ValueError:
		print("Error: content is not JSON")
		sys.exit(1)
else:
	content = res.text

with open(args.filename, 'w', encoding='UTF-8') as f:
	f.write(content)
	print(f"Content written to '{args.filename}'")
