package com.mindsprint.ems.dao;

public class Main {
    public static void main(String[] args) {
        EmployeeDAO dao = new EmployeeDAOImpl();
        Employee emp = new Employee("pintu","harsh@gmail.com");
//        if(dao.addEmployee(emp)>0)
//        {
//            System.out.println("Employee added successfully");
//        }
//        else
//            System.out.println("Error while registering");
//        dao.getAllEmployee();
//        System.out.println();
//        dao.deleteEmployee(2);
//        dao.updateEmployee(4,"jaydeep");
        dao.getAllEmployee();
    }
}
