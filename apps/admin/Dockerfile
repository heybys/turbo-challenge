# Nginx 이미지를 기반으로 한다
FROM nginx:alpine

# React 프로젝트의 빌드된 dist 폴더의 내용을 Nginx가 제공하는 디렉토리로 복사한다
COPY dist/ /usr/share/nginx/html/

# Nginx의 기본 설정을 사용하거나 필요에 따라 custom 설정 파일을 복사할 수 있다
# COPY nginx.conf /etc/nginx/nginx.conf

# 80 포트를 외부에 노출한다
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
