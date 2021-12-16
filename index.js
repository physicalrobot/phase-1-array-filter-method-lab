// Code your solution here


findMatching = (drivers, name) => {
    let passDrivers = drivers.filter((idx) => idx === name);


    return drivers.filter(
        (idx) => idx.toLowerCase() === name.toLowerCase()
    )
    return passDrivers
}


function fuzzyMatch(drivers, string) {
    const driverSpecific = drivers.filter(function (element) {
        return element.slice(0, 2) === string;
    });
    return driverSpecific;

}

function matchName(drivers, string) {
    return drivers.filter(function (hometown) {
        return hometown.name === string;
    });
}
