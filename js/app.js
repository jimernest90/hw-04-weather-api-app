/* #### ⚡️ Your page should have:
- [ ] An **input field** for a user to enter a zip code or city name
- [ ] A **submit button**
- [ ] When the submit button is clicked:
    - [ ] A **GET** request should fetch the weather data from the OpenWeather API
    - [ ] The following data should be rendered to the page:
        - [ ] City name
        - [ ] Current temperature (displayed in Fahrenheit)
        - [ ] Weather description
        - [ ] Min temp
        - [ ] Max temp
- [ ] Have the temperature turn blue if under 40, and red if above 90.

Here are some zip codes / city names to test!

- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA) */
function search(cityName){
    const url = 'https://api.openweathermap.org'
    const apiKey = 'ad7c9971c4a75cf17e01bc59f26c5c8a'

    $.ajax({
      url: url,
      type: "GET",
      data: {id: 99501, APPID: apiKey }
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
