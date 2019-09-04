function search(cityName){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}'
    const apiKey = 'ad7c9971c4a75cf17e01bc59f26c5c8a'

    $.ajax({
      url: url,
      type: "GET",
      data: {q: city name, api_key: apiKey }
    })
    .done((response) => {
      // execute this function if request is successful
      console.log(response)
      displayResults(response.data)
    })
    .fail(() => {
      // execute this function if request fails
      alert('error occurred')
    })
  }
