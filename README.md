#Steps to run application

Clone the repository.

Install the npm in backend and frontend.

Make a .env file in backend

Add your own api key in .env file as API_KEY.

Start the backend server. node index.js (backend)

After starting backend server wait for around 5 minutes to get response from the polygon server. (as polygon free api permits only 5 api calls per minute so 1 api call requires around 12 sec to get the information and our maximum requirement is 20 api so 12*20 = 240sec or 4 mins but for safety we are taking 1 min extra.)

Now start the frontend server. npm start (frontend) (http://localhost:3000)

Enter the number of stocks u want to fetch.
