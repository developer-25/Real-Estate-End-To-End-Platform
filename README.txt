Step 1: Extract the ZIP file.
  └─ Unzip the project archive to a folder on your machine.

Step 2: Open the folder in VS Code.
  └─ In VS Code: File → Open Folder… → select the unzipped project folder.

Step 3: Install and start the backend.
  3.1 Open a split terminal in VS Code.
  3.2 In the first pane, run:
        cd backend
        npm install
  3.3 Now see what all requirements are there in the project like mongodb connection string ,brevo Api,twilio code etc 

Step 4: Install and start the frontend and admin.
  4.1 In the second pane, run:
        cd frontend
        npm install
        npm run dev

After completing these steps, both the frontend and admin apps plus the backend API will be running on localhost.
Now you can follow the standard steps of deployment .

