This is a dummy repo to comment and try to make sense of the code of the project 2




TLDR of Sprint 1 (objective = implementation of a city search input field) **Working on App.jsx / api.jsx / search.jsx**

(S63 means seach.jsx line 63 / A17 means App.jsx line 17)

	- 1/ We are calling the handleOnChange everytime we change the input and wait for the debounce timer to run out (S63)
	
	- 2/ We are passing the data (S14), we are setting the new value (S15) and we are calling the onSearchChange (16)
	
	- 3/ onSearchChange has been passed from the app.jsx (A17) and that method is returning and splitting the latitudes and longitudes (A9)



End result :
	
![image](https://user-images.githubusercontent.com/92638765/197807495-4c7899e9-d110-42ac-b10c-b96662d2df96.png)

Sprint 2 objective = Call the Current Weather API with those GPS coordinates to fetch the corresponding current weather (Current City, Icon, Temperature, Status)
<https://openweathermap.org/current>  **Working on App.jsx / currentWeather.jsx**

Sprint 3 objective = Call the Forecast Weather API with those GPS coordinates to fetch the corresponding hourly forecast weather for today and the next 2 days (O.00 ; 6.00am ; 12.00am ; 18.00pm) (Wind, Humidity, Sunrise, Sunset)
<https://openweathermap.org/api/hourly-forecast> **Working on App.jsx / forecast.jsx**

Sprint 4 objective = Implementing a back-up server to store Saved cities and retrieve a summary for them (City, Country, Icon, Temperature)

Sprint 5 objective = Implementaing a subscribe list to be able to send a weekly newsletter with the weather to the user that wants it
