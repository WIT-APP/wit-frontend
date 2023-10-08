
![LOGOS WORK IN TECH, Google y Somos F5](https://github.com/WIT-APP/wit-frontend/blob/main/src/assets/footer-image.png?raw=true)
 <h1>Work in Tech (WIT) - Aplicación de Gestión de Becas</h1>

 <p align="center">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   <img src="https://img.shields.io/github/license/WIT-APP/wit-frontend">
   <img src="https://img.shields.io/github/issues/WIT-APP/wit-frontend">
   <img src="https://img.shields.io/github/languages/count/WIT-APP/wit-frontend">
   <img src="https://img.shields.io/github/contributors/WIT-APP/wit-frontend">
  </p>

<h2>Índice</h2>

*[Título e imagen de portada](#Título-e-imagen-de-portada)

*[Insignias](#insignias)

*[Índice](#índice)

*[Descripción del proyecto](#descripción-del-proyecto)

*[Planteamiento del problema](#planteamiento-del-problema)

*[Propuesta solución](#propuesta-solucion)

*[Estado del proyecto](#Estado-del-proyecto)

*[Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)

*[Acceso al proyecto](#acceso-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas Contribuyentes](#personas-contribuyentes)

*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)

*[Licencia](#licencia)

*[Conclusión](#conclusión)


<h2>Descripción del Proyecto</h2>

Bienvenido al repositorio Frontend de la aplicación de gestión de becas para el programa Work in Tech (WIT) de la Fundación Somos F5. Este proyecto tiene como objetivo centralizar y automatizar el proceso de registro de interés, selección, matriculación y seguimiento de las personas que participan en el programa WIT.

<h3>Planteamiento del problema</h3>

Actualmente, el equipo de WIT trabaja con una base de datos descentralizada gestionada de manera manual a través de archivos de Google Sheets. El proceso inicial recopila datos a través de un formulario de Google, y luego, en los pasos posteriores a la preinscripción, varias personas actualizan y manipulan estos datos, lo que ha afectado la integridad de la base de datos.

<h3>Propuesta Solución</h3>

Nuestra solución es desarrollar una aplicación que simplifique y centralice la gestión de datos en todo el proceso de administración de becas de Work in Tech. Esto permitirá garantizar la integridad y precisión de los datos recopilados y actualizados. Además, nuestro objetivo es mejorar la experiencia del usuario, haciendo que el proceso sea más intuitivo y reduciendo la necesidad de pasos manuales.

<h2>Estado del proyecto</h2>

Actualmente la aplicación para la gestión de Becas de google por parte de Work in Tech se encuentra funcional en una etapa inicial. Esta aplicación recolecta la información de pre-inscripción de todos los aspirantes, esta información es capturada por medio de un formulario, y enviado a nuestra API [Reporsitorio Backend](https://github.com/WIT-APP/wit-backend) para almacenar la información en la base de datos. Posteriormente, esta aplicación le permite a la organización gestionar la información de los aspirantes y continuar con el proceso de asignación de las becas para estudiar alguno de los siguientes cursos:

*Soporte de Tecnologías de la Información
*Automatización de Tecnologías de la Información con Python

Este proceso supone el siguiente flujo de vida de un aspirante que pasa los filtros y es asignado una licencia para estudiar uno de estos programas.


[Flujo de estados](https://github.com/WIT-APP/wit-frontend/blob/main/src/assets/Estados.png?raw=true)

<p>Entonces, podemos inferir que una persona que aplica a una beca, incia su proceso llenando el formulario de registro. Una vez completado este paso, y por medio de un filtro automatico, una persona puede tomar uno de los siguientes estados, <span weigth='bold'>PRE-APROBADO</span> ó <span weigth='bold'>APLICANTE</span>; esto dependerá de un filtro automatizado en nuestra API, este filtro se encarga de verificar si la persona reside en España o sí ya ha estado previamente registrado en alguno de los pasos posteriores, es decir esta duplicado en la base de datos. Esto es posible, ya que hay casos excepcionales que se quieren evaluar anter de ser rechazados, y aquí introducimos un nuevo estado <span weigth='bold'>RECHAZADO</span>.
Retomando el inicio del flujo, una persona que automaticamente fue aprobada o que en su defecto a pasado por revisión manual para ser aprobado pasa a ser <span weigth='bold'>INVITADO</span> a una sesión informativa, para esta sesion informativa, una persona debería confirmar su asistencia y estara <span weigth='bold'>CONFIRMADO</span>, además puede ser invitada un limite de veces, por lo general 6 veces; si la persona no asiste a la sesion informativa será RECHAZADA; si por el contrario avanza al proceso de Entrevista donde adquiere el atributo de <span weigth='bold'>ENTREVISTADO</span>, donde esta persona puede ser RECHAZADA ó <span weigth='bold'>ADMITIDA</span>. Allí inicia todo un proceso de matricula, y una vez completado su estado será <span weigth='bold'>MATRICULADO</span>, una persona Matriculada durante el desarrollo y cumplimiento de sus modulos puede adquirir dos estados, <span weigth='bold'>CERTIFICADO</span>, cuando ha culminado sus modulos con exito, ó <span weigth='bold'>BAJA </span>cuando por el contrario los ha abandonado.</p>

## Equipo de Desarrollo

- **Scrum Master:** Alejandra Naranjo
- **Product Owner:** Carlos Saiz
- **Desarrolladores:**
  - Angela García
  - Deniz Ozerdogan
  - Federico Martino
  - Jesus Fajardo

## Herramientas y Tecnologías Utilizadas

- **React.js:** Biblioteca de JavaScript desarrollada por Facebook para la creación de interfaces de usuario (UI) interactivas y de una sola página.
- **Vite:** Herramienta de construcción rápida y versátil para el desarrollo de aplicaciones web modernas.
- **React Router:** Biblioteca de enrutamiento diseñada para aplicaciones web basadas en React.
- **Lucide React:** Biblioteca de íconos Lucide para aplicaciones de React.
- **Tailwind Forms:** Extensión de Tailwind CSS para crear formularios web con estilo de manera eficiente.
- **Tailwind CSS:** Framework de diseño de código abierto para desarrollar interfaces de usuario de manera rápida y eficiente.
- **PostgreSQL:** Sistema de gestión de bases de datos relacional (RDBMS) de código abierto.
- **ElephantSQL:** Servicio en la nube para bases de datos PostgreSQL.
- **Railway:** Plataforma de desarrollo para crear, implementar y administrar aplicaciones web y servicios en la nube.
- **Vercel:** Plataforma de alojamiento en la nube para aplicaciones web y sitios estáticos.
- **Vitest:** Framework de pruebas unitarias para JavaScript.
- **Jest:** Framework de pruebas unitarias para JavaScript.
- **Visual Studio Code:** Entorno de desarrollo de código abierto.
- **Trello:** Plataforma de gestión de proyectos en línea.
- **Slack:** Aplicación de mensajería empresarial.
- **Discord:** Plataforma de comunicación para chat de voz y texto en tiempo real.
- **Scrum:** Marco de trabajo ágil.
- **GitHub:** Plataforma web para el desarrollo colaborativo de software.

## Guía de Configuración

Para configurar y ejecutar la aplicación en su entorno local, siga los siguientes pasos:

1. Clonar estos repositorios: 
`git clone https://github.com/WIT-APP/wit-frontend`, 
`git clone https://github.com/WIT-APP/wit-backend`

2. Instalar las dependencias: `npm install`
React y React Dom: `npm install react react-dom`
React Router: `npm install react-router-dom`
Lucide React: `npm install lucide-react`
Tailwind CSS y Tailwind Forms: `npm install tailwindcss tailwindcss/forms`

Dependencias de Desarrollo:
Vite: `npm install --save-dev vite`
Vitest y Jest: `npm install --save-dev vitest jest`

Dependencias de la Base de Datos
PostgreSQL: `npm install pg`

3. Configurar la base de datos PostgreSQL y actualizar la configuración en `config.js`.

4. Ejecutar la aplicación: `npm start`

## Contacto

Para cualquier pregunta o consulta, no dude en ponerse en contacto con el equipo de desarrollo a través de Slack o Discord.

¡Gracias por ser parte de este emocionante proyecto!