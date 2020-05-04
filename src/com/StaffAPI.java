package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/StaffAPI")
public class StaffAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	StaffService staffService = new StaffService();
       
    public StaffAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 String output = staffService.insertStaff(
					 request.getParameter("staffNic"),
					 request.getParameter("staffName"),
					 request.getParameter("staffMobileno"),
					 request.getParameter("staffEmail"),
					 request.getParameter("staffGender"),
					 request.getParameter("staffSpecialize"));
			 
			 response.getWriter().write(output);
			}

	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
	try
	 {
		Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		String queryString = scanner.hasNext() ?
				scanner.useDelimiter("\\A").next() : "";
				scanner.close();
				String[] params = queryString.split("&");
	 for (String param : params)
	 { 
		 String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}
	 
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		 String output = staffService.updateStaff(paras.get("hidStaffIDSave").toString(),
		 paras.get("staffNic").toString(),
		 paras.get("staffName").toString(),
		 paras.get("staffMobileno").toString(),
		 paras.get("staffEmail").toString(),
		 paras.get("staffGender").toString(),
		 paras.get("staffSpecialize").toString());
		response.getWriter().write(output);
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
