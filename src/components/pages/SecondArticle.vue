<template lang="html">
  <section class="article">
    <div class="parallax">
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 class="my-title">How to make your own bash commands in MacOS</h1>
        <h3 class="date">January 15, 2019</h3>
      </v-parallax>
    </div>

    <div class="content">
      <p>You want to make your own terminal commands? Here, you will learn to do it in two different ways,
        in pure Bash, and in Node.js, with perks and cons for each way.
      </p>
      <h2>In Bash</h2>
      <p>First, open the file .bash_profile. You can write functions in it and run them 
        like any other bash commands. For example, write this:</p>
      <pre v-highlightjs><code class="bash">{{ sourcecode }}</code></pre>
      <p class="text">This command first check if there's no argument to it. If this is the case, 
        it does "cd ..", which make us go back to the previous directoy. Else, 
        if there's an int as argument, it will do "cd .." as many times as the argument.</p>
        <p>If you're not familiar with bash syntax, you can check this nice <a href="https://devhints.io/bash">cheatsheets</a>.</p>
      <p class="text">Save your bash profile, exit the file and run this command:</p>
      <pre v-highlightjs><code class="bash">{{ command }}</code></pre>
      <p class="text">You're gone to the previous directory, as expected. Now run it with an 
        argument, for example 3:</p>
      <pre v-highlightjs><code class="bash">{{ commandWithArgument }}</code></pre>
      <p class="text">You're gone to the third previous directory!</p>

      <h2 class="small-title">In Node.js</h2>
      <p class="text">In Node.js, we are going to use some third party libraries. Start by installing yarn:</p>
      <pre v-highlightjs><code class="bash">{{ installCommand }}</code></pre>
      <p class="text">yarn is a package manager for Javascript.</p>
      <p>Also install ansiweather, that display the current weather conditions in your terminal, with support for ANSI colors and Unicode symbols:</p>
      <pre v-highlightjs><code class="bash">{{ ansiweatherInstall }}</code></pre>
      <p class="text">Let's create a project directory and initialize it as a Node.js application:</p>
      <pre v-highlightjs><code class="bash">{{ projectCommands }}</code></pre>
      <p class="text">Now, create a file named commands.js, and write this:</p>
      <pre v-highlightjs><code class="bash">{{ commandJS }}</code></pre>
      <p class="text">The code is so straightforward, it almost doesn't need explanation.
        With the function "command", we create a command, with parameters inside <CodeHighlight code="<>"></CodeHighlight>.
        We can add an optional description of the command. Then in the function "action", we can do whatever we want.
        Here, what i'm doing is an "exec", which will execute a bash command in a temporary shell. 
        So I'll execute the command that display the weather of a particular city, which is
        <CodeHighlight code="'ansiweather -l ' + city"></CodeHighlight>. The exec function takes a function as callback,
          with 3 parameters: error, stdout, and stderr. stdout is the result of the exec, so we'll just display it.
      </p>
      <p class="text">Save this file, and type:</p>
      <CodeHighlight code="yarn link"></CodeHighlight>
      <p class="text">This will create a symlink from commands.js script to <CodeHighlight code="usr/local/bin/commands"></CodeHighlight>,
         so you will be able to run this script from any folder.</p>
      <p class="text">Now, type this:</p>
      <CodeHighlight code="commands showWeather chicago"></CodeHighlight>
      <p class="text">And you should have the weather in Chicago 🏙️</p>
      <p class="text">You now know how to create your own bash commands! 🎉</p>
    </div>
  </section>

</template>

<script lang="js">
import CodeHighlight from '../codeHighlight/CodeHighlight'

  export default  {
    name: 'secondArticle',
    components: {CodeHighlight},
    props: [],
    mounted() {

    },
    data() {
      return {
        sourcecode: `back(){
  if [ $# -eq 0 ]
  then
    cd ..
  else
    for (( c=0; c<$1; c++ ))
    do
      cd ..
    done
  fi
}`,
      command: `$ back`,
      commandWithArgument: `$ back 3`,
      installCommand: `$ npm install -g yarn`,
      projectCommands: `$ mkdir commands # Create project directory
$ cd commands && yarn init # Initialize the directory as a Node.js application and follow the prompt
$ yarn add commander`,
      commandJS: `#!/usr/bin/env node

const program = require('commander')
const exec = require('child_process').exec;

program
  .version('1.0.0')
  .description('Node.js bash commands')

program
  .command('showWeather <city>')
  .description('Show weather in a particular city given in parameter')
  .action((city) => {
    exec('ansiweather -l ' + city, function callback(error, stdout, stderr) {
      console.log(stdout)
    })
  })

program.parse(process.argv)`,
    ansiweatherInstall: `brew install ansiweather`,
    binPath: `/usr/local/bin/commands`,
    hats: `<>`
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.article {
  font-size: 20px;

  .my-title {
    font-size: 40px;
    padding-left: 40px;
  }

  .image {
    width: 150px;
  }

  .date {
    color: white;
    font-weight: 300;
    padding-left: 40px;
  }

}

.content {
  margin: 40px;
}

.text {
  margin-top: 20px;
}

</style>
