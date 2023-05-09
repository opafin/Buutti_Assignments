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
optional file param:

```bash
npx buuf 1 10 .ts
```

Makes Lecture folders with inner folders, and an exercise file that stay in order in Github  
Does not overwrite, or duplicate files, so max count can be proggressively increased.   
<span style="color:green">Recommended use</span>.: buuf 3 3, buuf 3 6, buuf 3 9 buuf 3 12 etc  
  
*ver 1.0.1 formats lectures, assignments and files with zeroes 01 for better organization in Github*   
*ver 1.0.2 checks if any type of assignment files already exist, providing safety from excess files.*  
*ver 1.0.3 accepts an optional type parameter. **npx buuf 3 10 .ts** //this works with the "." and without.*  
*ver 1.0.4 clarified comments*  
*ver 1.0.5 now works with empty spaces in foldernames. (made the .cmd file take the path as string instead of plain)*

![alt text](https://raw.githubusercontent.com/opafin/Buutti_Bootcamp_Full_Stack/main/buufolders.png)
