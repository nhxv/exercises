create table exercise.Department (
	Dept_id int NOT NULL AUTO_INCREMENT,
    Dept_name varchar(255),
    Dept_location varchar(255),
    PRIMARY KEY (Dept_id)
);

create table exercise.Student (
	St_id int NOT NULL AUTO_INCREMENT,
    st_name varchar(255),
    st_address varchar(255),
    st_email varchar(255),
    st_cellNo int,
    Dept_id int,
    PRIMARY KEY (St_id),
    FOREIGN KEY (Dept_id) REFERENCES Department(Dept_id)
);

create table exercise.Subject (
	Sub_code int NOT NULL AUTO_INCREMENT,
    Sub_name varchar(255),
    crd_hrs int,
    PRIMARY KEY (Sub_code)
);

create table exercise.Grade (
	St_id int NOT NULL,
    Sub_code int NOT NULL,
    Exam_name varchar(255),
    Marks int,
    Gpa int,
	PRIMARY KEY (St_id, Sub_code),
    FOREIGN KEY (St_id) REFERENCES Student(St_id),
    FOREIGN KEY (Sub_code) REFERENCES Subject(Sub_code)
);