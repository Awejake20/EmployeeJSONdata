var employeesPromise = d3.json("employee.json")

var makeTable = function(employees)
{
    var box = d3.select("body")
    .selectAll("div")
    .data(employees)
    .enter()
    .append("div")
    
    box.append("div")
    .attr("class","employee")
    .append
    
    box.append("div")
    .attr("class","detail")
    
    
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