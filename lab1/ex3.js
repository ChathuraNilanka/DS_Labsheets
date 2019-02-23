vehicleName = 'Olympic'

printVehicleName = function() {
    console.log(vehicleName)
}

Vehicle = {
    vehicleName: "test",
    getVehicleName : printVehicleName
}

printVehicleName()
Vehicle.getVehicleName();

