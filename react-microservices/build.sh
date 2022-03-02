npm run-script build  

docker build -f Dockerfile -t azizzakiryarov/react-microservices:latest .

docker push azizzakiryarov/react-microservices:latest

kubectl delete deployment.apps/react-microservices-deployment service/react-service

kubectl apply -f /Users/azizzakiryarov/IdeaProjects/react-microservices/react-microservices/k8s/base/react-microservices/ingress.yaml

kubectl apply -f /Users/azizzakiryarov/IdeaProjects/react-microservices/react-microservices/k8s/base/react-microservices/deployment.yaml

kubectl apply -f /Users/azizzakiryarov/IdeaProjects/react-microservices/react-microservices/k8s/base/react-microservices/service.yaml