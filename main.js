$.ajax({
  url: 'https://covid19.th-stat.com/api/open/today',
  success(result) {
    // $('#weather-temp').html(`<strong> ${result} </strong> degrees`);
    // document.querySelector('#weather-temp').innerHTML = `<strong> ${result} </strong> degrees`
    console.log(result)
    document.getElementById('user').innerHTML = `<div> ${result.Confirmed} 
    <div> ${result.Recovered} 
    <div> ${result.Hospitalized} 
    <div> ${result.Deaths} 
    <div> ${result.NewConfirmed} 
    <div> ${result.NewRecovered} 
    </div>`
  },
});
