package com.mindsprint.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Collections;
import java.util.Scanner;

public class BatchUpdate {
    public static void main(String[] args) {
        try(Connection conn = DBconfig.getConnection()){
            Scanner sc =  new Scanner(System.in);
            String sql = "insert into employee (name,email) values (?,?)";
            PreparedStatement pst = conn.prepareStatement(sql);
            while (true)
            {
                System.out.println("Enter name: ");
                String name = sc.next();
                System.out.println("Enter email: ");
                String email = sc.next();
                pst.setString(1,name);
                pst.setString(2,email);
                pst.addBatch();
                System.out.println("Enter 1 to exit");
                if(sc.next().equals("1")) break;
//                continue;
            }
            int[] records=pst.executeBatch();
            System.out.println(records.length+" record inserted in DB");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
