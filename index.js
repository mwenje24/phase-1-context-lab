/* Your Code Here */// Your code here

const createEmployeeRecord = (valueIndex) => {
    const details = {
        firstName: valueIndex[0],
        familyName: valueIndex[1],
        title: valueIndex[2],
        payPerHour: valueIndex[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return details;
}

const createEmployeeRecords = (employee) => {
    return employee.map((valueIndex) =>{
        return createEmployeeRecord(valueIndex)
    })
}

const createTimeInEvent = (dateStamp) => {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const createTimeOutEvent = (dateStamp) => {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

const hoursWorkedOnDate = (soughtDate) => {
    let inEvent = this.timeInEvents.find((event) =>{
        return event.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find((event) =>{
        return event.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = (dateSought) => {
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

const allWagesFor = () => {
    const eligibleDates = this.timeInEvents.map((event) => {
        return event.date
    })

    const payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate.call(this, d)
    },bind(this), 0)

    return payable
}

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find((data) => {
    return data.firstName === firstName
  })
}

const calculatePayroll = (arrayOfEmployeeRecords) => {
    return arrayOfEmployeeRecords.reduce((memo, data) =>{
        return memo + allWagesFor(data)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



