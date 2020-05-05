<%@page import="com.StaffService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Staff Management</title>
<link rel="stylesheet" href="Views/css/bootstrap.min.css">
<link rel="stylesheet" href="Views/css/style.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/staff.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Staff Management</h1>
				<form id="formStaff" name="formStaff">
					Staff Nic: <input id="staffNic" name="staffNic" type="text"
						class="form-control form-control-sm"> <br> 
					Staff name:<input id="staffName" name="staffName" type="text"
						class="form-control form-control-sm"> <br> 
					Staff mobileno: <input id="staffMobileno" name="staffMobileno" type="text"
						class="form-control form-control-sm"> <br> 
					Staff email: <input id="staffEmail" name="staffEmail" type="text"
						class="form-control form-control-sm"> <br> 
					Staff gender: <input id="staffGender" name="staffGender" type="text"
						class="form-control form-control-sm"> <br> 
					Staff specialize: <input id="staffSpecialize" name="staffSpecialize" type="text"
						class="form-control form-control-sm"> <br> 
						
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary"> 
					<input type="hidden" id="hidStaffIDSave" name="hidStaffIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divStaffGrid">
					<%
					StaffService staffService = new StaffService();
					out.print(staffService.readStaff());
					%>
				</div>
			</div>
		</div>
	</div>

</body>
</html>