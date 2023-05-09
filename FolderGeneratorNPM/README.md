```bash
npm install buufolders
````
```bash
npx buuf 1 10
```
```
1 = thisLecture
10 = totalAssignmentCount
```
![alt text](https://raw.githubusercontent.com/opafin/Buutti_Bootcamp_Full_Stack/main/buufolders.png)

optional file param:

```bash
npx buuf 1 10 .ts
```

*ver 1.0.1 formats lectures, assignments and files with zeroes 01 for better organization in Github*   
*ver 1.0.2 checks if any type of assignment files already exist, providing safety from excess files.*  
*ver 1.0.3 accepts an optional type parameter. **npx buuf 3 10 .ts** //this works with the "." and without.*  
*ver 1.0.4 clarified comments*  
*ver 1.0.5 now works with empty spaces in foldernames. (made the .cmd file take the path as string instead of plain)*
