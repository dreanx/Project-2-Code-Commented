This is a dummy repo to comment and try to make sense of the code of the project 2


TLDR of Sprint 1:

(S63 means seach.jsx line 63 / A17 means App.jsx line 17)

	- 1/ We are calling the handleOnChange everytime we change the input and wait for the debounce timer to run out (S63)
	
	- 2/ We are passing the data (S14), we are setting the new value (S15) and we are calling the onSearchChange (16)
	
	- 3/ onSearchChange has been passed from the app.jsx (A17) and that method is returning and splitting the latitudes and longitudes (A9)
