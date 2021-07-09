/*

Las columnas están contenidas en una fila (row). Construir filas y columnas.

================================
Proceso con SASS
    
Utilizando node para instalar SASS:
Comprobar que está instalado con: node -v
Crear el package.json con: npm init
Instalar SASS con: npm i node-sass --save-dev  -> xq es una herramienta de desarrollo, no se requiere para producción
En el package.json aparece en Dev-dependency
PARA VOLVER A INSTALAR LA CARPETA NODE_MODULES: npm install
ESTO REVISARÁ EL PACKAGE.JSON, E INCLUIRÁ LOS MÓDULOS NECESARIOS PARA EL PROYECTO

=============================
Para compilar un archivo SASS:
    En el package.json se agrega un script
    "compile:sass":"node-sass sass/main.scss css/style2.css"
    "nombre":"función"
    En este caso se necesita un archivo de entrada (el archivo SASS) y un archivo de salida
    (el archivo .css) y ahí saldrá el archivo compilado
    Luego, en la terminal escribir el comando que se definió con el nombre del script:

    npm run nombreScript

    Al escribir:
    "compile:sass":"node-sass sass/main.scss css/style2.css -w"
    La w indica que estará viendo si hay algún cambio en el archivo, lo ejecutará y no será
    necesario volver a escribir el nombre del script en la consola.

=========================================

margin: 0 auto;//mostrará el contenido siempre en el centro de la pantalla, con 0 de margen
    //arriba y abajo, y a la izq y der lo ajustará

max-width: 114rem; //1140px/10px=114rem  los 1140px son un estándar
    //si la pantalla es menor a 1140px, entonces ocupará el 100% del ancho de la pantalla

&:not(:last-child){
        margin-bottom: $gutter-vertical;
    }
    //aplicará todas las características dentro de estas llaves, excepto a last-child (not)

calc()
    //permite hacer operaciones matemáticas y mezclar unidades
    //para que se traduzca bien una var a css en la f calc() se envuelve entre #{}:
    width: calc((100%-#{$gutter-horizontal})/2);

@mixin clearfix { //estándar de la clase clearfix
    &::after{
        content: ""; //permitirá que el pseudoelemento aparezca en la pág y debe estar vacío 
                    xq en realidad no queremos verlo
        display: table; //lo muestra
        clear: both; //limpia ambos flotantes (a la der e izq) sin importar si se usa
                    float: right; o float: left;
    }
} //el clearfix agrega un pseudo elemento después del elemento que luego borrará estos flotantes
    //esta clase se incluirá en la cuadrícula

//Se usa porque la altura del row es de 0px, y es porque todos los elementos hijo del row están
flotando, entonces la altura colapsa y se convierte en cero

==========================================================================
Seleccionar todas las columnas al mismo tiempo y luego aplicar los estilos

// Selector de atributos:
    [atributo] -> [src] ahora estos se pueden seleccionar por el path o por alt

    [alt="logo"] {

    }

    [class^="col-"] { //Permite seleccionar todas las clases que comiencen con "col-", gracias al 
        //símbolo ^
        //el * significaría que seleccione todas las clases que incluyan lo definido entre ""
        // el $ seleccionaría las clases que terminen con "col-"
        
    }












*/