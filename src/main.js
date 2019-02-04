import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router'
import VueProgressBar from 'vue-progressbar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import hljs from 'highlight.js'
import Vuex from 'vuex'
import VueTranslate from 'vue-translate-plugin'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueAxios, axios)
Vue.use(VueProgressBar, options)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueTranslate)
Vue.config.productionTip = false

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})

const store = new Vuex.Store({
  state: {
    isDarkModeEnabled: false
  },
  mutations: {
    switchDesignMode(state, mode) {
      state.isDarkModeEnabled = mode
    },
    changeLanguage(state, language) {
      state.language = language
    }
  }
})

Vue.locales({
  french: {
    'name': `Buisson Reda`,
    'hi': 'Salut, je suis',
    'im': 'Je suis un',
    'developer': 'développeur',
    'from': 'de',
    'create': 'Je créé des',
    'websites': 'sites webs',
    'mobile_apps': 'des applications mobiles',
    'and': 'et créé différentes sortes de',
    'projects': 'projets',
    'why': `J'ai créé ce site pour montrer ma carrière en programmation, présenter les 
            différents projets que j'ai réalisés au fil des années, montrer mes compétences 
            en programmation et mon environnement de travail. J'espère que ça vous plaira !`,
    'last': 'Derniers projets',
    'articles': 'Articles',
    'first_article_title': 'Comment faire des transitions de navigation dans votre site Vue.js',
    'first_article_date': '14 janvier 2019',
    'first_article_presentation': `Si vous créez un site Vue.js et que vous souhaitez effectuer 
                                   des transitions fluides lorsque vous naviguez, vous êtes au 
                                   bon endroit.`,
    'first_article_content': `Si vous créez un site Vue.js et que vous souhaitez effectuer de douces 
                              transitions lorsque vous naviguez, vous êtes au bon endroit.`,
    'first_article_content_2': `Accédez à votre fichier App.vue et écrivez ce modèle.`,
    'first_article_content_3': `Notez le composant de transition. Cela vient de Vue.js, 
                                vous n'avez pas besoin d'une bibliothèque tierce pour l'utiliser. 
                                Plus d'infos à ce sujet`,
    'here': `ici`,
    'first_article_content_4': `Dans le même fichier, ajouter ce css`,
    'first_article_content_5': `Vous pouvez bien sûr ajuster la longueur de la transition,
                                changer de couleur ou faire ce que vous voulez`,
    'first_article_content_6': `Vous avez maintenant des transitions de navigation dans votre site Vue.js`,
    'about': `À propos`,
    'hi_2': `Bonjour, je suis Buisson Réda, je suis un développeur web de Toulouse, en France`,
    'why_2': `J'ai créé ce site pour présenter mon parcours de programmation jusqu'à présent`,
    'timeline': `Parcours`,
    'before': `65 millions av.`,
    'dinosaurs': `Les dinosaures apparaissent sur Terre`,
    'born': `Je suis né à Toulouse, France`,
    'bac': `J'obtiens mon baccalauréat scientifique et commence à étudier l'informatique`,
    'dut': `Je reçois un DUT à l'Institut Universitaire de Blagnac, France`,
    'shootmania': `J'atteins la demi-finale dans un tournoi de Shootmania. Vidéo de ma performance`,
    'blagnac': `Je reçois une licence Pro à l'Institut Universitaire de Blagnac, France`,
    'job': `Je commence à travailler pour une société nommée Ze-Watt, spécialisée dans la mobilité électrique`,
    'music': `Musique`,
    'flstudio': `Parfois, je fais de la musique avec Fl Studio. Jeter un oeil à mon`,
    'photography': 'Photographie',
    'take': `Je prends beaucoup de photos. Aller voir mon`,
    'b2': `Comment créer vos propres commandes bash sous MacOS`,
    'date2': `15 janvier 2019`,
    'pres2': `Vous voulez faire vos propres commandes de terminal? Ici, 
              vous apprendrez à le faire de deux manières différentes, en Bash pur et en Node.js, 
              avec des avantages et des inconvénients pour chaque méthode.`,
    'inBash': `En Bash`,
    'text2': `Commencez par ouvrir le fichier .bash_profile. Vous pouvez y écrire des 
              fonctions et les exécuter comme n'importe quelle autre commande bash. 
              Par exemple, écrivez ceci`,
    'anotherText2': `Cette commande vérifie d'abord s'il n'y a pas d'argument. 
                     Si tel est le cas, il fait "cd ..", ce qui nous ramène au répertoire précédent. 
                     Sinon, s'il y a un 'int' en argument, il fera "cd .." autant de fois que l'argument`,
    'anotherText3': `Si vous n'êtes pas familier avec la syntaxe bash, vous pouvez aller jeter un oeil sur ce`,
    'anotherText4': `Enregistrez votre profil bash, quittez le fichier et exécutez cette commande`,
    'anotherText5': `Vous êtes allé au répertoire précédent, comme prévu. Maintenant, lancez-le avec 
                     un argument, par exemple 3`,
    'anotherText6': `Vous êtes allé au troisième répertoire précédent !`,
    'inNode': `En Node.js`,
    'anotherText7': `Dans Node.js, nous allons utiliser des bibliothèques tierces. 
                     Commencez par installer le fil`,
    'yarn': `yarn est un package manager pour Javascript`,
    'ansi2': `Installez également answeather, qui affiche les conditions 
              météorologiques actuelles dans votre terminal, avec prise en charge 
              des couleurs ANSI et des symboles Unicode.`,
    'anotherText8': `Créons un répertoire de projet et initialisons-le en tant qu'application Node.js`,
    'anotherText9': `Maintenant, créez un fichier nommé commands.js et écrivez ceci`,
    'anotherText10': `Le code est si simple qu'il n'a presque pas besoin d'explication. 
                      Avec la fonction "commande", nous créons une commande, avec des paramètres 
                      entre les `,
    'text36': `Nous pouvons ajouter une description facultative de la commande. Ensuite, 
               dans la fonction "action", nous pouvons faire ce que nous voulons. 
               Ici, ce que je fais est un "exec", qui exécutera une commande bash dans un 
               shell temporaire. Donc, je vais exécuter la commande qui affiche la météo d'une 
               ville particulière, qui est`,
    'anotherText11': `La fonction exec prend une fonction en tant que rappel, 
                      avec 3 paramètres: error, stdout et stderr. stdout est le résultat de 
                      l'exec, nous allons donc l'afficher.`,
    'save': `Enregistrez ce fichier et tapez`,
    'symlink': `Cela créera un lien symbolique à partir du script commands.js vers`,
    'so': `vous pourrez donc exécuter ce script depuis n'importe quel répertoire`,
    'nowT': `Maintenant, tapez ceci`,
    'weather': `Et vous devriez avoir la météo à Chicago`,
    'end2': `Vous savez maintenant comment créer vos propres commandes bash !`,
    'project1': `Jeu Tangram créé en HTML, CSS et avec la bibliothèque D3.js`
  },
  english: {
    'name': `Buisson Reda`,
    'hi': "Hi, I'm",
    'im': 'I am a',
    'developer': 'developer',
    'from': 'from',
    'create': 'I create',
    'websites': 'websites',
    'mobile_apps': 'mobile apps',
    'and': 'and create different kind of',
    'projects': 'projects',
    'why': `I created this site to show my programming career, present the different projects 
            I've made throughout the years, show my programming skills and my workflow!. 
            I hope you'll enjoy it`,
    'last': 'Last projects',
    'articles': 'Articles',
    'first_article_title': 'How to make navigation transitions in your Vue.js site',
    'first_article_date': 'January 14, 2019',
    'first_article_presentation': `If you're making a Vue.js site and you want to have sweet 
                                   transitions when you navigate,
                                   you're in the right place`,
    'first_article_content': `If you're making a Vue.js site and you want to have sweet transitions 
                              when you navigate, you're in the right place`,
    'first_article_content_2': `Go to your App.vue file, and write this template`,
    'first_article_content_3': `Notice the transition component. It's from Vue.js, you don't need a 
    third party library to use it. More info about it`,
    'here': `here`,
    'first_article_content_4': `In the same file, add this css`,
    'first_article_content_5': `You can of course adjust the length of the transition, or change color, 
                                or do anything you want`,
    'first_article_content_6': `You have now navigation transitions in your Vue.js site`,
    'about': `About`,
    'hi_2': `Hi, I'm Buisson Réda, I'm a web developer from Toulouse, France`,
    'why_2': `I created this site to showcase my programming journey so far`,
    'timeline': `Timeline`,
    'before': `65 millions B.C`,
    'dinosaurs': `Dinosaurs appear on Earth`,
    'born': `I was born in Toulouse, France`,
    'bac': `I get my bachelor's degree and start studying computer science`,
    'dut': `I get a DUT in University Institute of Blagnac, France`,
    'shootmania': `I reach the semi-final in a tournament of Shootmania. Video of my performance`,
    'blagnac': `I get a Pro License in University Institute of Blagnac, France`,
    'job': `I start working for a company named Ze-Watt, specialized in electric mobility`,
    'music': `Music`,
    'flstudio': `Sometimes, I make music using Fl Studio. Check my`,
    'photography': `Photography`,
    'take': `I take a lot of pictures. Check my`,
    'b2': `How to make your own bash commands in MacOS`,
    'date2': `January 15, 2019`,
    'pres2': `You want to make your own terminal commands? Here, you will learn 
              to do it in two different ways, in pure Bash, and in Node.js, with perks and 
              cons for each way.`,
    'inBash': `In Bash`,
    'text2': `First, open the file .bash_profile. You can write functions in it and run 
              them like any other bash commands. For example, write this`,
    'anotherText2': `This command first check if there's no argument to it. If this is the case, 
                     it does "cd ..", which make us go back to the previous directoy. 
                     Else, if there's an 'int' as argument, it will do "cd .." as many times as the argument`,
    'anotherText3': `If you're not familiar with bash syntax, you can check this nice`,
    'anotherText4': `Save your bash profile, exit the file and run this command`,
    'anotherText5': `You're gone to the previous directory, as expected. Now run it with an 
                     argument, for example 3`,
    'anotherText6': `You're gone to the third previous directory!`,
    'inNode': `In Node.js`,
    'anotherText7': `In Node.js, we are going to use some third party libraries. Start by installing yarn`,
    'yarn': `yarn is a package manager for Javascript`,
    'ansi2': `Also install ansiweather, that display the current weather conditions in your terminal, 
              with support for ANSI colors and Unicode symbols`,
    'anotherText8': `Let's create a project directory and initialize it as a Node.js application`,
    'anotherText9': `Now, create a file named commands.js, and write this`,
    'anotherText10': `The code is so straightforward, it almost doesn't need explanation. 
                      With the function "command", we create a command, with parameters inside `,
    'text36': `We can add an optional description of the command. Then in the function "action", 
               we can do whatever we want. Here, what i'm doing is an "exec", which will 
               execute a bash command in a temporary shell. So I'll execute the command that 
               display the weather of a particular city, which is`,
    'anotherText11': `The exec function takes a function as callback, with 3 parameters: error, 
                      stdout, and stderr. stdout is the result of the exec, so we'll just display it.`,
    'save': `Save this file, and type`,
    'symlink': `This will create a symlink from commands.js script to`,
    'so': `so you will be able to run this script from any folder`,
    'nowT': `Now, type this`,
    'weather': `And you should have the weather in Chicago`,
    'end2': `You now know how to create your own bash commands!`
  },
  spanish: {
    'name': `Buisson Reda`,
    'hi': 'Hola, soy',
    'im': 'Soy un',
    'developer': 'desarrollador',
    'from': 'desde',
    'create': 'Yo creo',
    'websites': 'sitios web',
    'mobile_apps': 'aplicaciones móviles',
    'and': 'y crear diferentes tipos de',
    'projects': 'proyectos',
    'why': `Creé este sitio para mostrar mi carrera en programación, presentar los diferentes 
            proyectos que he realizado a lo largo de los años, mostrar mis habilidades de 
            programación y mi flujo de trabajo. Espero que lo disfrutes!`,
    'last': 'Últimos proyectos',
    'articles': 'Artículos',
    'first_article_title': 'Cómo hacer transiciones de navegación en tu sitio Vue.js',
    'first_article_date': '14 enero 2019',
    'first_article_presentation': `Si estás haciendo un sitio Vue.js y quieres tener transiciones 
                                   dulces cuando navegas, estás en el lugar correcto`,
    'first_article_content': `Si estás haciendo un sitio Vue.js y quieres tener transiciones dulces 
                              cuando navegas, estás en el lugar correcto`,
    'first_article_content_2': `Ve a tu archivo App.vue y escribe esta plantilla`,
    'first_article_content_3': `Note el componente de transición. Es de Vue.js, no necesita una 
                                biblioteca de terceros para usarla. Más información al respecto.`,
    'here': `aquí`,
    'first_article_content_4': `En el mismo archivo, agregue este css.`,
    'first_article_content_5': `Por supuesto, puede ajustar la duración de la transición, cambiar el 
                                color o hacer lo que quiera`,
    'first_article_content_6': `Ahora tiene transiciones de navegación en su sitio Vue.js`,
    'about': `Acerca de`,
    'hi_2': `Hola, soy Buisson Réda, soy un desarrollador web de Toulouse, Francia`,
    'why_2': `He creado este sitio para mostrar mi viaje de programación hasta ahora`,
    'timeline': `Curso`,
    'before': `65 millones a. C.`,
    'dinosaurs': `Aparecen dinosaurios en la tierra`,
    'born': `Nací en Toulouse, Francia`,
    'bac': `Me gradúo y empiezo a estudiar informática.`,
    'dut': `Recibo un DUT en el Instituto Universitario de Blagnac, Francia`,
    'shootmania': `Llego a la semifinal en un torneo de Shootmania. Video de mi performance`,
    'blagnac': `Obtengo una licencia profesional en el Instituto Universitario de Blagnac, Francia`,
    'job': `Empiezo a trabajar para una empresa llamada Ze-Watt, especializada en movilidad eléctrica.`,
    'music': `Música`,
    'flstudio': `A veces, hago música usando Fl Studio. Revisa mi`,
    'photography': `Fotografía`,
    'take': `Tomo muchas fotos. Revisa mi`,
    'b2': `Cómo hacer tus propios comandos de bash en MacOS`,
    'date2': `15 de enero de 2019`,
    'pres2': `¿Quieres hacer tus propios comandos de terminal? Aquí, aprenderás a hacerlo 
              de dos maneras diferentes, en Bash puro y en Node.js, con ventajas y desventajas 
              para cada forma.`,
    'inBash': `En Bash`,
    'text2': `Primero, abra el archivo .bash_profile. Puedes escribir funciones en 
              él y ejecutarlas como cualquier otro comando de bash. Por ejemplo, escribe esto`,
    'anotherText2': `Este comando primero verifica si no hay argumento para ello. Si este es el caso, 
                     hace "cd ..", lo que nos hace volver al directoy anterior. De lo contrario, 
                     si hay un 'int' como argumento, hará "cd .." tantas veces como el argumento`,
    'anotherText3': `Si no está familiarizado con la sintaxis de bash, puede verificar esto`,
    'anotherText4': `Guarde su perfil de bash, salga del archivo y ejecute este comando`,
    'anotherText5': `Se ha ido al directorio anterior, como se esperaba. Ahora ejecútalo 
                     con un argumento, por ejemplo 3`,
    'anotherText6': `¡Ya has ido al tercer directorio anterior!`,
    'inNode': `En Node.js`,
    'anotherText7': `En Node.js, vamos a utilizar algunas bibliotecas de terceros. Empieza por instalar 
                     hilo`,
    'yarn': `Yarn es un gestor de paquetes para Javascript`,
    'ansi2': `Instale también ansiweather, que muestra las condiciones climáticas actuales 
              en su terminal, con soporte para colores ANSI y símbolos Unicode`,
    'anotherText8': `Vamos a crear un directorio de proyecto e inicializarlo como una aplicación Node.js`,
    'anotherText9': `Ahora, crea un archivo llamado commands.js, y escribe esto`,
    'anotherText10': `El código es tan sencillo que casi no necesita explicación. 
                      Con la función "comando", creamos un comando, con parámetros dentro de `,
    'text36': `Podemos añadir una descripción opcional del comando. Luego, en la función 
               "acción", podemos hacer lo que queramos. Aquí, lo que estoy haciendo es un "exec", 
               que ejecutará un comando bash en un shell temporal. Así que ejecutaré el comando 
               que muestra el clima de una ciudad en particular, que es`,
    'anotherText11': `La función exec toma una función como devolución de llamada, 
                      con 3 parámetros: error, stdout y stderr. stdout es el resultado del exec, 
                      así que solo lo mostraremos.`,
    'save': `Guarde este archivo y escriba`,
    'symlink': `Esto creará un enlace simbólico desde el script de command.js hasta`,
    'so': `Así podrás ejecutar este script desde cualquier carpeta.`,
    'nowT': `Ahora, escriba esto`,
    'weather': `Y deberías tener el clima en Chicago`,
    'end2': `¡Ahora sabes cómo crear tus propios comandos de bash!`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')