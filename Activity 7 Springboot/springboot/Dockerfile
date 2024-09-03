FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY target/springboot-0.0.1-SNAPSHOT.jar /app/springboot-0.0.1-SNAPSHOT.jar

EXPOSE 8082

ENTRYPOINT ["java","-jar","/app/springboot-0.0.1-SNAPSHOT.jar"]