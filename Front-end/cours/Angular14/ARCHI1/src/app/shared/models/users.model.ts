export interface User {
    firstName: string; 
    lastName: string;  
    gender: string;    
    birthDate: Date;   
    login: string;     
    password: string;
    confpassword: string;  
    companyName: string;
}

export interface LoggedUser {
    login: string;
    password: string;
}