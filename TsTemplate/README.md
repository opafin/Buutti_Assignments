# Linter Error
If there is an .eslintrc.json in the repository root as well, then adding this to the current projects   eslintrc.json will make ESlint work in the current project.  
  
```
{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
        
 ```
  
> With this added the linter won't go looking for configs in the parent folders, and cause conflicts
  
  
    
  
# tsconfig Error
When creating the template tsconfig-file would show an error  
adding a .ts file fixed this
```ts
example.ts
```
> "TypeScript expects there to be at least one TypeScript file in the folder in order to compile."
  
# Helpful commands for template initialization 
```
npm init @eslint/config
```
