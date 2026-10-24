# ---- Этап сборки ----
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
ARG MODULE

COPY pom.xml ./
COPY newshub-models/pom.xml newshub-models/
COPY newshub-scraper/pom.xml newshub-scraper/
COPY newshub-service/pom.xml newshub-service/

# Скачиваем зависимости (включая библиотеку) — кэшируемый слой
RUN mvn -B -q -pl ${MODULE} -am dependency:go-offline

# Копируем исходный код всего проекта
COPY . .

# Собираем модуль
RUN mvn -B -q -pl ${MODULE} -am package -DskipTests  && cp ${MODULE}/target/*.jar /build/app.jar

# ---- Этап запуска ----
FROM eclipse-temurin:17-jre
WORKDIR /app
#COPY --from=build /build/${MODULE}/target/*.jar app.jar
COPY --from=build /build/app.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]