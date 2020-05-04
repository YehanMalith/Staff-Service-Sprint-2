$(document).ready(function() {
		$("#alertSuccess").hide();
		$("#alertError").hide();
});

// SAVE-------------
$(document).on("click", "#btnSave", function(event) {
	
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	 
	// Form validation-------------------
	 var status = validateStaffForm();
	 if (status != true)
	  {
	  $("#alertError").text(status);
	  $("#alertError").show();
	  return;
	  }
	 
	 var type = ($("#hidStaffIDSave").val() == "") ? "POST" : "PUT";
	 
	 $.ajax({
			url : "StaffAPI",
			type : type,
			data : $("#formStaff").serialize(),
			dataType : "text",
			complete : function(response, status) {
				onStaffSaveComplete(response.responseText, status);
			}
		});
});

function onStaffSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divStaffGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidStaffIDSave").val("");
	$("#formPatient")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
 $("#hidStaffIDSave").val($(this).closest("tr").find('#hidStaffIDUpdate').val());
 $("#staffNic").val($(this).closest("tr").find('td:eq(0)').text());
 $("#staffName").val($(this).closest("tr").find('td:eq(1)').text());
 $("#staffMobileno").val($(this).closest("tr").find('td:eq(2)').text());
 $("#staffEmail").val($(this).closest("tr").find('td:eq(3)').text());
 $("#staffGender").val($(this).closest("tr").find('td:eq(4)').text());
 $("#staffSpecialize").val($(this).closest("tr").find('td:eq(5)').text());
});

//CLIENT-MODEL================================================================
function validateStaffForm()
{
// NIC
if ($("#staffNic").val().trim() == "")
 {
 return "Insert Staff Nic.";
 }
// NAME
if ($("#staffName").val().trim() == "")
 {
 return "Insert Staff Name.";
 }
// MOBILE NO-------------------------------
if ($("#staffMobileno").val().trim() == "")
 {
 return "Insert Staff Mobileno.";
 }
// EMAIL-------------------------------
if ($("#staffEmail").val().trim() == "")
{
return "Insert Staff Email.";
}
// GENDER-------------------------------
if ($("#staffGender").val().trim() == "")
{
return "Insert Staff Gender.";
}
// SPECIALIZE------------------------
if ($("#staffSpecialize").val().trim() == "")
 {
 return "Insert Staff Specialize.";
 }
return true;
}
