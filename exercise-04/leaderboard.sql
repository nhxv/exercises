select Student.St_id, Student.st_name, Grade.Marks, Subject.Sub_name from Student
join Grade on Student.St_id = Grade.St_id
join Subject on Grade.Sub_code = Subject.Sub_code
where Grade.Sub_code = 1 /* change subject here */
order by Marks desc
limit 10 offset 0;