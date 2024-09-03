package com.mindsprint.ems.models;

import com.mindsprint.ems.dao.EmployeeDAOImpl;

import java.util.Scanner;

public class Employee {
    public static void main(String[] args) {
        EmployeeDAOImpl dao = new EmployeeDAOImpl();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1 for add employee \n2 for GetAll Employees\n3 For Update Employee\4 For Delete Employee\n5 For System Exit");
        int input = Integer.parseInt(sc.nextLine());
        switch (input)
        {
            case 1:
                System.out.println("Enter name: ");
                String name = sc.nextLine();
                System.out.println("Enter email: ");
                String email = sc.nextLine();


        }
    }
}
