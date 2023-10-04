FLASk_SERVER_PUBLIC_URL=http://abdevs4371.pythonanywhere.com
NODE_SEVER_PUBLIC_URL=https://word-busters-backend.onrender.com
FRONTEND_PUBLIC_URL=https://word-busters.vercel.app

nnote: please login to pythonanywhere during 3 months and click the reload button in dashboard, othewise flask server will crash

add this in package.json in node-server before deploying : 
 "engines": {
    "node": ">=14 <15"
  },