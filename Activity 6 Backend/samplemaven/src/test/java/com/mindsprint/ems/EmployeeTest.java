package com.mindsprint.ems;

import com.mindsprint.ems.dao.Employee;
import com.mindsprint.ems.dao.EmployeeDAO;
import com.mindsprint.ems.dao.EmployeeDAOImpl;
import org.junit.jupiter.api.*;

public class EmployeeTest {
    EmployeeDAO dao;
    @BeforeEach
    public void setUp(){
        dao= new EmployeeDAOImpl();
    }
    @AfterEach
    public void tearDown(){
        dao=null;
    }
    @Disabled
    @Test
    public void checkAdd(){
        Employee emp1 = new Employee("jack","jack@email.com");
        Assertions.assertEquals(1,dao.addEmployee(emp1));
    }
    @Test
    public void checkList(){
        Assertions.assertEquals(9,dao.getAllEmployee().size());
    }
    @Test
    public void checkEmployeeById(){
        Assertions.assertNull(dao.getById(88));
    }
}
