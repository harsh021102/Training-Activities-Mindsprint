package com.mindsprint.ems.dao;

public class Employee {
    private int id;
    private String name;
    private String email;
    public Employee(String name, String email) {
        this.name = name;
        this.email = email;
    }
    public Employee(int id,String name,String email)
    {
        this.id=id;
        this.name=name;
        this.email=email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
