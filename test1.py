#!/usr/bin/env python3.6

import argparse
import os
import subprocess
import sys

parser = argparse.ArgumentParser(description='Kill the running proc listening on a given port')

parser.add_argument('port', type=int, help="Port number to use")

port = parser.parse_args().port

try:
	result = subprocess.run(
		['lsof', '-n', "-i4TCP:%s" % port],
		stdout=subprocess.PIPE,
		stderr=subprocess.PIPE)
except subprocess.CalledProcessError:
	print(f"No process listening on port {port}")
	exit(1)
else:
	listening = line

	for line in result.stdout.splitlines():
		if "LISTEN" in str(line):
			listening = line
			break
	
	if listening:
		# PID is the 2nd col in the output
		pid = int(listening.split()[1])
		os.kill(pid, 9)
		print(f"killed process {pid}")
	else:
		print(f"No process listening on port {port}"1)
		exit(1)
		
