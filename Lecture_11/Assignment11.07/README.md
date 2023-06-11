- stores versatile Date-objects for start and end time  
- reports all overlapping events  
- reports Date-object start and end -overlaps  
- reports allDay-boolean overlaps  (allDay boolean idea from google calendar)    
must have: title, description strings   
must have: date string in format "2023-5-11",  
optionals are derived, from the compulsory date on POST, or from the saved event on a PUT request,         
optionals: time in format "12:00",  
optionals: enddate & endtime "2023-6-11" or "12:00",   
optionals: all day boolean. "true"/"false"
optionals: for a PUT request, all details except ID are optional 
->> optionals require a ton of checking in the code  
gräfix: only if endTime is different to startTime, show endTime  
gräfix: only if endDay is different to startDay day, show endDay  
gräfix: only if Allday === false, show time

<img src="https://gitlab.com/opafin/Buutti_Full_Stack_Bootcamp_Lab_Not_Hub/-/raw/main/Lecture_11/Assignment11.06/exampleGetbyMonth.png" alt="Example Image" width="500"/>

