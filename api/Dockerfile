# Use the official Node.js image
FROM node:18.16.0-alpine3.17

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

# Usa una imagen base oficial de Node.js
FROM node:18.16.0-alpine3.17

# Establece el directorio de trabajo
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación
COPY . .

# Expone el puerto que la aplicación utiliza
EXPOSE 3080

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
