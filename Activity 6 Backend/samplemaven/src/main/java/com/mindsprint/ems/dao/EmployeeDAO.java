package com.mindsprint.ems.dao;

import java.util.List;

public interface EmployeeDAO {
    public int addEmployee(Employee employee);
    public List<Employee> getAllEmployee();
    public void deleteEmployee(int id);
    public void updateEmployee(int id,String name);
    public Employee getById(int id);
}
