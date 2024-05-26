# Use the official httpd image as the base image
FROM httpd:2.4

# Set maintainer (Optional)
LABEL maintainer="heybys@naver.com"

# 환경 변수 설정
ENV APACHE_LOG_DIR /usr/local/apache2/logs

# Copy the build output to the Apache server's document root
COPY ./deploy/httpd.conf /usr/local/apache2/conf/httpd.conf
#COPY ./deploy/httpd-vhosts.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf
COPY ./dist/ /usr/local/apache2/htdocs/

# Fix permissions for the logs directory
#RUN chown -R daemon:daemon /usr/local/apache2/logs && chmod -R 755 /usr/local/apache2/logs

# Expose the default HTTP port
EXPOSE 80

# Start the Apache server
CMD ["httpd-foreground"]
