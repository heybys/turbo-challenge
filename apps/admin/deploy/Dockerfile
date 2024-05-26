# Use the official httpd image as the base image
FROM httpd:2.4

# Set maintainer (Optional)
LABEL maintainer="heybys@naver.com"

# Copy the build output to the Apache server's document root
COPY ../dist /usr/local/apache2/htdocs/
COPY my-httpd.conf /usr/local/apache2/conf/httpd.conf

# Expose the default HTTP port
EXPOSE 80

# Start the Apache server
CMD ["httpd-foreground"]
