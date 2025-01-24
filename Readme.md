step 1

open terminal and hit 

yarn or npm install

####################################

step 2

open xempp and start appache and mysql server

####################################

step 3

create demo_task table in mysql(phpmyadmin)

####################################

step 4

create .env and add this variables

PORT=5000
DATABASE_URL="mysql://root@localhost:3306/demo_task"

####################################

step 5

open terminal and hit

npx prisma migrate dev --name create_task_table

####################################

step 6

open terminal and hit

npm run dev or yarn dev

