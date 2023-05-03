import os
import time

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')
clear_console()

print("**Welcome to the Lecture Folder Generator!**")
lecture_number = input("which lecture is this? (enter a number) ")
clear_console()

how_many_to_generate = int(input("set the total count of assignments: (enter a number) "))
clear_console()

print(f"Generating {how_many_to_generate} assignment folders and files for Lecture {lecture_number}")

lecture_folder = f"Lecture_{lecture_number}"
if not os.path.exists(lecture_folder):
    os.makedirs(lecture_folder)

for i in range(0, how_many_to_generate):
    
    #setting the format to 00, 01, 02, etc.
    format_i = str(i).zfill(2)

    #setting directory and file names in the loop
    assignment_folder = f"Assignment{lecture_number}.{format_i}"
    assignment_file = f"assignment{lecture_number}.{format_i}.js"

    # creating the directories
    full_assignment_folder_path = os.path.join(lecture_folder, assignment_folder)
    if not os.path.exists(full_assignment_folder_path):
        os.makedirs(full_assignment_folder_path)

    # creating the js_file
    full_assignment_file_path = os.path.join(full_assignment_folder_path, assignment_file)
    if not os.path.exists(full_assignment_file_path):
        js_file = open(full_assignment_file_path, 'w')
        js_file.close()

time.sleep(3)
print("Done!")
print("The total count of assignments can be increased later")
print("e.g from 3 to 15. Just run the script again.\n")
print("previous assignments will not be overwritten, duplicates will not be created.\n")