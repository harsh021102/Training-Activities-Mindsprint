package com.mindsprint.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.*;

public class EmployeeDAOImpl implements EmployeeDAO {

    @Override
    public int addEmployee(Employee employee) {
        int result=0;
        try(Connection connection=DBconfig.getConnection();) {
            String sql = "insert into employee(name,email) values (?,?)";
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setString(1,employee.getName());
            pst.setString(2,employee.getEmail());
            result=pst.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<Employee> getAllEmployee() {
        try(Connection connection=DBconfig.getConnection();) {
            String sql = "select * from employee";
            Statement stmt = connection.createStatement();
            ResultSet set =stmt.executeQuery(sql);
            ArrayList<Employee> list = new ArrayList<>();
            while(set.next())
            {
                list.add(new Employee(set.getInt(1),set.getString(2),set.getString(3)));
            }
            return list;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
//        return
    }

    @Override
    public void deleteEmployee(int id) {
        try(Connection connection=DBconfig.getConnection();) {
            String sql = "delete from employee where id = (?)";
            Statement stmt = connection.createStatement();
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setInt(1,id);
            if(pst.executeUpdate()>0)
            {
                System.out.println("User Deleted");
            }else {
                System.out.println("User not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }@Override
    public void updateEmployee(int id,String name) {
        try(Connection connection=DBconfig.getConnection();) {
            String sql = "update employee set name=? where id=?";
            Statement stmt = connection.createStatement();
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setString(1,name);
            pst.setInt(2,id);
            if(pst.executeUpdate()>0)
            {
                System.out.println("User updated");
            }else {
                System.out.println("User not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Override
    public Employee getById(int id)
    {
        Employee em=null;
        try(Connection connection=DBconfig.getConnection();) {
            String sql = "select * from employee where id=?";
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setInt(1,id);
            ResultSet set = stmt.executeQuery();
            if(set.next())
                em = new Employee(set.getInt(1),set.getString(2),set.getString(3));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return em;
    }
}
