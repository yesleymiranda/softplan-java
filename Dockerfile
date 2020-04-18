FROM nginx
MAINTAINER Yesley Miranda
RUN mkdir -p /usr/share/man/man1
RUN apt update
RUN apt install -y default-jre
COPY softplan-front/build /usr/share/nginx/html
COPY softplan-nginx.conf /etc/nginx/conf.d/default.conf
COPY target/softplan-0.0.1-SNAPSHOT.jar /
CMD service nginx start && java -jar softplan-0.0.1-SNAPSHOT.jar
EXPOSE 8080
