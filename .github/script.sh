#!/bin/sh

if [ -e README.txt ]
then
	echo "all okey"
else
	echo "Readme not found"
	exit 1
fi