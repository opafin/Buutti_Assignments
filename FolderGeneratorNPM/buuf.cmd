@echo off
node "%~dp0\buuf.js" %*

:: by default windows will go and execute buuf.js in WSH (Windows Script Host)
:: WSH was introduced in Windows 95 -- coinsidence or not, this program won't work with WSH.
:: This file makes sure that node is used instead
:: %~dp0 is the path of the current folder .cmd & are in the same folder, so the .js is found.
:: node is the command to execute with node
:: buuf.js is the file to execute

:: added the " " to pass the arguments as a string, to get past empty spaces in folder names