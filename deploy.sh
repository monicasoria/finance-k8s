gcloud functions deploy kickstarter_predict --source ./finance_cfunction --trigger-http --memory 2048

docker build -t davidsantander/finance-k8s-client:latest -t davidsantander/finance-k8s-client:$SHA -f ./client/Dockerfile ./client
docker build -t davidsantander/finance-k8s-server:latest -t davidsantander/finance-k8s-server:$SHA -f ./server/Dockerfile ./server

docker push davidsantander/finance-k8s-client:latest
docker push davidsantander/finance-k8s-server:latest

docker push davidsantander/finance-k8s-client:$SHA
docker push davidsantander/finance-k8s-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=davidsantander/finance-k8s-server:$SHA
kubectl set image deployments/client-deployment client=davidsantander/finance-k8s-client:$SHA
