package com.mindsprint.springboot.repo;

import com.mindsprint.springboot.models.Employee;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeRepiImpl implements EmployeeRepo{

    ArrayList<Employee> list = new ArrayList<>();
    @Override
    public Employee addEmployee(Employee employee) {
        employee.setId((int)(Math.random()*1000));
        list.add(employee);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return list;
    }

    @Override
    public Employee getEmployeeById(int id) {
        Employee found = null;
        for(Employee e: list)
        {
            if(e.getId()==id) {
                found = e;
                break;
            }
        }
        return found;
    }

    @Override
    public boolean deleteEmployee(int id) {
        Employee found = null;
        for(Employee e: list)
        {
            if(e.getId()==id)
                found=e;
        }
        if(found!=null)
        {
            list.remove(found);
            return true;
        }
        return false;
    }
}
