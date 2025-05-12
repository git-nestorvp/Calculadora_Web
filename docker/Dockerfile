# Usar una imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos estáticos de la carpeta src al contenedor
COPY ../src /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

