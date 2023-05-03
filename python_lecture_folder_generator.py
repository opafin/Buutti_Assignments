import os

lecture_number = input("which lecture is this? (enter a number) ")
how_many_to_generate = int(input("how many assignments to generate? (enter a number) "))
print(f"generating {how_many_to_generate} assignment-folders and files for Lecture {lecture_number}" )


lecture_folder = f"Lecture_{lecture_number}"
if not os.path.exists(lecture_folder):
    os.makedirs(lecture_folder)

for i in range(0, how_many_to_generate):
    #setting directory and file names in the loop
    assignment_folder = f"Assignment{lecture_number}.{i}"
    assignment_file = f"assignment{lecture_number}.{i}.js"

    # creating the directories
    full_assignment_folder_path = os.path.join(lecture_folder, assignment_folder)
    if not os.path.exists(full_assignment_folder_path):
        os.makedirs(full_assignment_folder_path)

    # creating the js_file
    full_assignment_file_path = os.path.join(full_assignment_folder_path, assignment_file)
    if not os.path.exists(full_assignment_file_path):
        js_file = open(full_assignment_file_path, 'w')
        js_file.close()