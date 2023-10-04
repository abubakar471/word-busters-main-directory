FLASk_SERVER_PUBLIC_URL=http://abdevs4371.pythonanywhere.com
NODE_SEVER_PUBLIC_URL=https://word-busters-backend.onrender.com
FRONTEND_PUBLIC_URL=https://word-busters.vercel.app

note: please login to pythonanywhere during 3 months and click the reload button in dashboard, othewise flask server will crash

add this in package.json in node-server before deploying : 
 "engines": {
    "node": ">=14 <15"
  },


Special feature used in this project:
    ballon blast after win:
    $ yarn add react-confetti (it is the main package) link : https://www.npmjs.com/package/react-confetti
    $ yarn add react-use (it is the supportive package tha was used to work with this)