package com.mindsprint.springboot.repo;

import com.mindsprint.springboot.models.Employee;

import java.util.List;

public interface EmployeeRepo {
    public Employee addEmployee(Employee employee);
    public List<Employee> getAllEmployees();
    public Employee getEmployeeById(int id);
    public boolean deleteEmployee(int id);
}
