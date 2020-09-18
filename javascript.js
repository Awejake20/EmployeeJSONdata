var employeesPromise = d3.json("employee.json")

var makeTable = function(employees)
{
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.firstName + " " + employee.lastName;
    });
    
    rows.append("td")
    .append("img")
    .attr("src",function(employee)
    {
        return employee.photo;
    });
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.title;
    });
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.unit;
    });
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.email;
    });
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.bio;
    });
    
    rows.append("td")
    .text(function(employee)
    {
        return employee.phone;
    });
}

var success = function(employees)
{
    console.log("Employees Found", employees)
    makeTable(employees)
}

var fail = function()
{
    console.log("Employees not found")
}

employeesPromise.then(success,fail)