Made this one it's own environment, but continued with the base environment in the next assignments`

Adding the code below to .eslintrc.json makes eslint ignore parent folder configs (.eslintrc)
this removes the eslint error (seen in output)
```
{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
        
```