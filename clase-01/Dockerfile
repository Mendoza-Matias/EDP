FROM node:18.20.8-alpine3.21

# Creo un directorio en el contenedor
WORKDIR /app 

# Copio los archivos package.json y package-lock.json
COPY package*.json ./ 

# Instalo las dependencias del proyecto
RUN npm install

# Copio el resto del proyecto al contenedor
COPY . .

# Expongo el puerto por el cual se accede a la aplicación
EXPOSE 9091

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
