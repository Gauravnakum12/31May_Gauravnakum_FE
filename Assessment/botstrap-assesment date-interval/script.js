function date() {
    let startDate = new Date(document.getElementById('startDate').value);
    let endDate = new Date(document.getElementById('endDate').value);

    const timeDifference = endDate - startDate;

    // convert convert milisecond to year,month,week , days
    let years = (timeDifference / (365.25 * 24 * 3600 * 1000));
    let months = (timeDifference / (30 * 24 * 3600 * 1000));
    let weeks = (timeDifference / (7 * 24 * 3600 * 1000));
    let days = (timeDifference / (24 * 3600 * 1000));

    //print result
    document.getElementById('result').innerHTML = `
    <h5 class='bg-primary text-light p-2'>Date interval between ${startDate.toDateString()} and ${endDate.toDateString()}</h5>
    <hr>
  <P>In Years: ${years}</p>
  <P>In Months: ${months}</p>
  <P>In Weeks: ${weeks}</p>
  <P>In  Days: ${days}</p>`;
}