# chmod +x deploy.sh
# ./deploy.sh 

echo "开始部署"

# 显示当前执行路径，用于排查路径错误
pwd 

git pull

# pm2 重启服务 node 服务
pm2 stop xxx
pm2 start src/index.js -n 'xxx'

echo "完成部署"