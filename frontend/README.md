#Steps to run application

1) Clone the repository.
2) Install the npm in backend and frontend.

3) Make a .env file in backend  
4) Add your own api key in .env file as API_KEY.

5) Start the  backend server.
    node index.js (backend)

6) After starting backend server wait for around 5 minutes to
   get response from the polygon server.
   (as polygon free api permits only 5 api calls per minute
   so 1 api call requires around 12 sec to get the information
   and our maximum requirement is 20 api so 12*20 = 240sec or 4 mins but for safety we are taking 1 min extra.)

7) Now start the frontend server.
    npm start (frontend)
    (http://localhost:3000)

8) Enter the number of stocks u want to fetch.
