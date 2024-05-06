# Nginx 이미지를 기반으로 한다
FROM nginx:alpine

# React 프로젝트의 빌드된 dist 폴더의 내용을 Nginx가 제공하는 디렉토리로 복사한다
COPY /apps/admin/dist/ /usr/share/nginx/html/tlm/
COPY /apps/gea-app/dist/ /usr/share/nginx/html/gea/

# Nginx의 기본 설정을 삭제합니다.
RUN rm /etc/nginx/conf.d/default.conf

# Nginx 설정 파일을 컨테이너로 복사합니다.
COPY nginx.conf /etc/nginx/conf.d

# 80 포트를 외부에 노출한다
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
