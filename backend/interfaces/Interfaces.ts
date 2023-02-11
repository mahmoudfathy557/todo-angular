
export interface Employee {
 "id": number,
 "firstName": string,
 "lastName": string,
 "email": string,
 "age": number,
 "hiredAt": string
}




export interface Department {

 "id": number,
 "name": string,
 "manager": string,
 "emps_no": number

}

export interface DB extends Employee,Department{}

