package com.mindsprint.springboot.controllers;

import com.mindsprint.springboot.models.Employee;
import com.mindsprint.springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serial;
import java.util.List;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
    EmployeeService service;

    @PostMapping
    public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee employee){
        Employee createObject = service.addEmployee(employee);
        return new ResponseEntity<>(createObject, HttpStatus.CREATED);
    }
    @GetMapping
    public  ResponseEntity<List<Employee>> getAll(){
//        return new ResponseEntity<>(service.getAllEmployees(),HttpStatus.OK);
        return ResponseEntity.ok(service.getAllEmployees());
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable int id)
    {
        Employee employee=service.getEmployeeById(id);
        if(employee!=null)
            return ResponseEntity.ok(employee);
        else
            return new ResponseEntity<>("Employee not found",HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable int id)
    {
        if(service.deleteEmployee(id))
            return ResponseEntity.ok("Employee deleted");
        else
            return new ResponseEntity<>("Employee not found to delete",HttpStatus.NOT_FOUND);
    }

}
