
Work in progress / trabajo en proceso :)

[astro-cooparaje.vercel.app](https://astro-cooparaje.vercel.app/)


![Logo](https://res.cloudinary.com/srcouto/image/upload/v1675475195/cooparaje/msedge_NvPp440Jtv_vjjjyj.png)


## Collection website example made with Astro and

- Typescript? = begginer
- Tailwind = with @apply*
- [PagefindUI](https://pagefind.app/docs/ui/) = cool search
- [Satori](https://github.com/vercel/satori) = cool OG images on build
- [@astrojs/image](https://github.com/lirantal/lirantaldotcom) = for scoring
- Swiperjs = working but don't know how :P
- Zod = begginer ultra
- Using contentful images assets.

### TailwindCSS

*With @apply just because it looks nicer. This is a well known bad practice so use this at your own risk. Also, handle with care :)

**Con @apply porque se ve el codigo más bonito. Su uso no esta recomendado asique replicar este ejemplo y tomarlo con pinzas*


## PagefindUI

Much of the implementation for the search comes from this great code by [lirantaldotcom](https://github.com/lirantal/lirantaldotcom).
It works at buildtime and scans all of the files that has a `data-pagefind-ignore, data-pagefind-body, data-pagefind-meta="image[src]"` and so on. Then with the script in `@/components/Search.astro` you can have a cool search experience. 

*Mucha de esta implementacion del buscador proviene de este gran codigo hecho por [lirantaldotcom](https://github.com/lirantal/lirantaldotcom). Lo que hace es escanear la información de los archivos del proyecto que tengan las propiedades `data-pagefind-ignore, data-pagefind-body, data-pagefind-meta="image[src]"`. Luego con un script que esta en `@/components/Search.astro` esta la logica para implementar una copada experiencia para buscar.*

### Test search in localhost.

I don't know how to make search work in localhostDev but to test it out basically it needs to build first, run a postbuild and then preview it. Or in a shortcut

*No se como hacer andar el buscador en localhostDev pero para testearlo al menos, primero hay que buildear el sitio, luego un postbuild y por ultimo previzualizar. O todo en un comando:*

```
npm run devp
```

which represents / que representa


```javascript
astro build && pnpm postbuild && pnpm preview
```
- replace pnpm with your own package manager.
- *reemplace pnpm por el packacge manager que utilices.*

## @astrojs/image

In local build it takes a lot of time to generate the images. (less that in the Gatsby version). But when deployed, the second build now has cache the images an it build a lot faster.

*CUando se buildea localmente las imagenes tardan bastante en generarse. (mucho menos que usando Gatsby). Una vez deployado el sitio hace un cache de las imagenes generadas y el buildeo es mucho mas rápido.*

## Astro Satori for OG images generation

Thanks a lot to [kevinzunigacuellar](https://github.com/kevinzunigacuellar/astro-satori) from which I learn a lot on how to use [satori](https://github.com/vercel/satori) to generate images from code.

*Se agradece a [kevinzunigacuellar](https://github.com/kevinzunigacuellar/astro-satori) de donde aprendi mucho de como usar la libreria  [satori](https://github.com/vercel/satori) para generar imagenes con código.*

## Basic script to generate MDX files from a Contentful site.

Inside script folder there is a code that is based on this awesome tutorial and I copy/paste&tweak and helped me generate MDX files from my Contentful page-data source on production. It worked for me but i barely get it to work (this parts are not my speciality) so handle with care :)

*Dentro de la carpeta script esta el codigo basado en este gran tutorial y que copie/pegue/edite y me ayudo para generar archivos MDX de la información que tengo en Contentful. Ami me sirvio pero apenas que esta andando (esta parte no es mi especialidad) asique usarlo con los debidos recaudos.*


## Thats all folks! / Eso es todo amigos!

# Wait a second, but why?

I started this to try out Astro collections and make a demo website while i learn how to use typescript without any other ecosystem or framework (por ahora) than astro. There are a quite a bit of errors that coulnd't' solve and room for improvement. 

*Empece este proyecto para probar las Astro collections y hacer una prueba de concepto de un sitio web hecho con Typescript sin usar otro framework (por ahora) que Astro.*
Hay pequeños errores que aun estoy entendiendo y mucho para mejorar.



If you got here...Thanks / *Si llegaste hasta aqui, Gracias* ❤️