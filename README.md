
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

*[Equipo de Desarrollo](#personas-contribuyentes)

*[Licencia](#licencia)

*[Agradecimientos especiales](#agradecimientos_especiales)


## Descripción del Proyecto

Bienvenido al repositorio Frontend de la aplicación de gestión de becas para el programa Work in Tech (WIT) de la Fundación Somos F5. Este proyecto tiene como objetivo centralizar y automatizar el proceso de registro de interés, selección, matriculación y seguimiento de las personas que participan en el programa WIT.

## Planteamiento del problema

Actualmente, el equipo de WIT trabaja con una base de datos descentralizada gestionada de manera manual a través de archivos de Google Sheets. El proceso inicial recopila datos a través de un formulario de Google, y luego, en los pasos posteriores a la preinscripción, varias personas actualizan y manipulan estos datos, lo que ha afectado la integridad de la base de datos.

## Propuesta Solución

Nuestra solución es desarrollar una aplicación que simplifique y centralice la gestión de datos en todo el proceso de administración de becas de Work in Tech. Esto permitirá garantizar la integridad y precisión de los datos recopilados y actualizados. Además, nuestro objetivo es mejorar la experiencia del usuario, haciendo que el proceso sea más intuitivo y reduciendo la necesidad de pasos manuales.

## Estado del proyecto

Actualmente la aplicación para la gestión de Becas de google por parte de Work in Tech se encuentra funcional en una etapa inicial. Esta aplicación recolecta la información de pre-inscripción de todos los aspirantes, esta información es capturada por medio de un formulario, y enviado a nuestra API [Reporsitorio Backend](https://github.com/WIT-APP/wit-backend) para almacenar la información en la base de datos. Posteriormente, esta aplicación le permite a la organización gestionar la información de los aspirantes y continuar con el proceso de asignación de las becas para estudiar alguno de los siguientes cursos:

*Soporte de Tecnologías de la Información <br>
*Automatización de Tecnologías de la Información con Python

Este proceso supone el siguiente flujo de vida de un aspirante que pasa los filtros y es asignado una licencia para estudiar uno de estos programas.


<img width="3248" alt="Flujo de estados" src="https://github.com/WIT-APP/wit-frontend/assets/144338411/6599f9d6-2f96-4320-af96-fdd858ef7857">


<p>Entonces, podemos inferir que una persona que aplica a una beca, incia su proceso llenando el formulario de registro. Una vez completado este paso, y por medio de un filtro automatico, una persona puede tomar uno de los siguientes estados, <strong>PRE-APROBADO</strong> ó <strong >APLICANTE</strong>; esto dependerá de un filtro automatizado en nuestra API, este filtro se encarga de verificar si la persona reside en España o sí ya ha estado previamente registrado en alguno de los pasos posteriores, es decir esta duplicado en la base de datos. Esto es posible, ya que hay casos excepcionales que se quieren evaluar anter de ser rechazados, y aquí introducimos un nuevo estado <strong >RECHAZADO</strong>.
Retomando el inicio del flujo, una persona que automaticamente fue aprobada o que en su defecto a pasado por revisión manual para ser aprobado pasa a ser <strong >INVITADO</strong> a una sesión informativa, para esta sesion informativa, una persona debería confirmar su asistencia y estara <strong >CONFIRMADO</strong>, además puede ser invitada un limite de veces, por lo general 6 veces; si la persona no asiste a la sesion informativa será RECHAZADA; si por el contrario avanza al proceso de Entrevista donde adquiere el atributo de <strong >ENTREVISTADO</strong>, donde esta persona puede ser RECHAZADA ó <strong >ADMITIDA</strong>. Allí inicia todo un proceso de matricula, y una vez completado su estado será <strong >MATRICULADO</strong>, una persona Matriculada durante el desarrollo y cumplimiento de sus modulos puede adquirir dos estados, <strong >CERTIFICADO</strong>, cuando ha culminado sus modulos con exito, ó <strong >BAJA </strong>cuando por el contrario los ha abandonado.</p>

<p>El proyecto ha alcanzado un 70% de su principal objetivo, hay un par de aspectos a mejorar que han quedado registrados en futuros Issues; por ejemplo, quisieramos añadir un modulo de seguimiento a las personas actualmente matriculadas que permita subir la información que se trae de la plataforma de estudios.</p>

## Características de la aplicación y demostración 

Esta aplicación se caracteriza por contar con dos secciones principales, la sección de	registro de nuevos aspirantes y la sección para la gestión de las becas.


  ### 2. Gestion de Becas

  En esta sección toda la información y las rutas se encuentran protegidas, es por ello que hay que iniciar sesión. He aquí nuestra interface para iniciar sesión.
  - ![login](https://github.com/WIT-APP/wit-frontend/assets/144338411/245d3104-ed90-4a5a-821e-ac79a5e62e36)

  El Dashboard carga inicialmente la tabla de pre-aprobados como vemos a continuación
  - ![pre-aprobado](https://github.com/WIT-APP/wit-frontend/assets/144338411/f0d87d20-7f62-4888-803e-c3ef3d65bfc3)
  Para cada estado se podrá visualizar una tabla resument con cada uno de ellos. Aquí algunos ejemplos incluyendo la vista del sidebar reducido.
  - ![aplicante](https://github.com/WIT-APP/wit-frontend/assets/144338411/f34cb3a5-a889-458b-8b7b-033f012d7201)
  - ![Confirmado](https://github.com/WIT-APP/wit-frontend/assets/144338411/aaf7ccbc-5d84-4939-ae59-408d108c53a5)
  - ![Entrevistado](https://github.com/WIT-APP/wit-frontend/assets/144338411/4f73b605-6573-4f77-adb4-72ea2925b8c2)
  - ![Admitido](https://github.com/WIT-APP/wit-frontend/assets/144338411/121796d5-f616-4496-ad98-fdeac8f616f5)
  - ![Matriculado](https://github.com/WIT-APP/wit-frontend/assets/144338411/daffa9a9-84f7-418a-8866-c0242d00a1a8)

  También se incluyen algunas estadisticas.
  - ![Estadísticas](https://github.com/WIT-APP/wit-frontend/assets/144338411/f492fa7f-45af-4892-8aae-eca4a9f70f3e)

  Y finalmente, hemos incluido una página de ayuda.
  - ![Ayuda](https://github.com/WIT-APP/wit-frontend/assets/144338411/4aa5eac1-d76d-4c04-b67c-cd4166727b5d)

## Acceso al proyecto

### Accede al formulario de registro
**[Click aquí para registrarte](https://wit-frontend-green.vercel.app/newapplicant/register)**

### Accede al dashboard

**[Click aquí para ir al dashboard](https://wit-frontend-green.vercel.app/login)** <br>
Usuario demo: admin@mail.com <br>
Password demo: 1234 



## Tecnologías Utilizadas

- **React.js:** Biblioteca de JavaScript desarrollada por Facebook para la creación de interfaces de usuario (UI) interactivas y de una sola página.
- **Vite:** Herramienta de construcción rápida y versátil para el desarrollo de aplicaciones web modernas.
- **React Router:** Biblioteca de enrutamiento diseñada para aplicaciones web basadas en React.
- **Lucide React:** Biblioteca de íconos Lucide para aplicaciones de React.
- **Tailwind Forms:** Extensión de Tailwind CSS para crear formularios web con estilo de manera eficiente.
- **Tailwind CSS:** Framework de diseño de código abierto para desarrollar interfaces de usuario de manera rápida y eficiente.
- **Formik y Yup:** Custom Hook para el desarrollo de formularios y validaciones.
- **Vercel:** Plataforma de alojamiento en la nube para aplicaciones web y sitios estáticos.
- **Vitest:** Framework de pruebas unitarias para JavaScript.

## Equipo de Desarrollo


  <div style="width:116px;">
    <a href="https://github.com/Alens678">
      <img src="https://avatars.githubusercontent.com/u/97367970?v=4" width="115" alt="Alejandra Naranjo">
    </a>
    <br>
    <sub>Alejandra Naranjo</sub>
  </div>
  <div style="max-width:116px;">
    <a href="https://github.com/carlos-saiz">
      <img src="https://avatars.githubusercontent.com/u/126065490?v=4" width="115" alt="Carlos Saiz">
    </a>
    <br>
    <sub>Carlos Saiz</sub>
  </div>
  <div style="display:flex flex-wrap:wrap justify-content:flex-start !important">
  <div style="width:116px;">
    <a href="https://github.com/Angela-GM">
      <img src="https://avatars.githubusercontent.com/u/116819605?s=400&u=bae5f7e88a358d3fbbd2f0e8521dda9a57739c70&v=4" width="115" alt="Angela Garcia">
    </a>
    <br>
    <sub>Angela Garcia</sub>
  </div>
  <div style="width:116px;">
    <a href="https://github.com/JFCTito">
      <img img src="https://avatars.githubusercontent.com/u/125603610?v=4" width="115" alt="Jesús Fajardo">
    </a>
    <br>
    <sub>Jesús Fajardo</sub>
  </div>
  <div style="width:116px;">
    <a href="https://github.com/denizozerdogan">
     <img src="https://avatars.githubusercontent.com/u/131254999?v=4" width="115">
    </a>
    <br>
    <sub>Deniz Ozerdogan</sub>
  </div>
  <div style="width:116px;">
    <a href="https://github.com/Federicojaviermartino">
     <img src="https://avatars.githubusercontent.com/u/122879094?v=4" width="115">
    </a>
    <br>
    <sub>Federico Martino</sub>
  </div>
</div>
</div>



## Licencia

 WIT-Frontend tiene licencia del MIT. <br>
 La documentación de  WIT-Frontend (p. ej., archivos .md en la carpeta ./docs) tiene licencia Creative Commons.

## Agradecimientos especiales

Agradecemos especialmente a Factoría F5 y todo su equipo, tambien a nuestro equipo de Formadores. Gracias por hacer posible nuestra formación. 

  <div style="width:116px;">
    <a href="https://github.com/Factoria-F5">
     <img src="https://avatars.githubusercontent.com/u/54581150?s=200&v=4" width="115">
    </a>
    <br>
    <sub>Factoría F5</sub>
  </div>
  <div style="width:116px;">
    <a href="https://github.com/amrhefny87">
     <img src="https://avatars.githubusercontent.com/u/82093081?v=4" width="115">
    </a>
    <br>
    <sub>Amr Hefny</sub>
  </div>
  <div style="width:116px;">
    <a href="https://github.com/raulf5">
     <img src="https://avatars.githubusercontent.com/u/102666302?v=4" width="115">
    </a>
    <br>
    <sub>Raúl García</sub>
  </div>



