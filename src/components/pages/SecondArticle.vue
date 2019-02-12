<template lang="html">
  <section class="article">
    <div class="parallax">
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 class="my-title">{{ t('b2') }}</h1>
        <h3 class="date">{{ t('date2') }}</h3>
      </v-parallax>
    </div>

    <div class="content">
      <p>{{ t('pres2') }}</p>
      <h2>{{ t('inBash') }}</h2>
      <p>{{ t('text2') }}:</p>
      <pre v-highlightjs><code class="bash">{{ sourcecode }}</code></pre>
      <p class="text">{{ t('anotherText2') }}.</p>
        <p>{{ t('anotherText3') }} <a href="https://devhints.io/bash">cheatsheets</a>.</p>
      <p class="text">{{ t('anotherText4') }} :</p>
      <pre v-highlightjs><code class="bash">{{ command }}</code></pre>
      <p class="text">{{ t('anotherText5') }} :</p>
      <pre v-highlightjs><code class="bash">{{ commandWithArgument }}</code></pre>
      <p class="text">{{ t('anotherText6') }}</p>

      <h2 class="small-title">{{ t('inNode') }}</h2>
      <p class="text">{{ t('anotherText7') }}:</p>
      <pre v-highlightjs><code class="bash">{{ installCommand }}</code></pre>
      <p class="text">{{ t('yarn') }}.</p>
      <p>{{ t('ansi2') }} :</p>
      <pre v-highlightjs><code class="bash">{{ ansiweatherInstall }}</code></pre>
      <p class="text">{{ t('anotherText8') }} :</p>
      <pre v-highlightjs><code class="bash">{{ projectCommands }}</code></pre>
      <p class="text">{{ t('anotherText9') }} :</p>
      <pre v-highlightjs><code class="bash">{{ commandJS }}</code></pre>
      <p class="text"> {{ t('anotherText10')}}<CodeHighlight code="<>"></CodeHighlight>.
        {{ t('text36')}}
        <CodeHighlight code="'ansiweather -l ' + city"></CodeHighlight>. {{ t('anotherText11')}}
      </p>
      <p class="text">{{ t('save') }} :</p>
      <CodeHighlight code="yarn link"></CodeHighlight>
      <p class="text">{{ t('symlink') }} <CodeHighlight code="usr/local/bin/commands"></CodeHighlight>,
         {{ t('so') }}.</p>
      <p class="text">{{ t('nowT') }} :</p>
      <CodeHighlight code="commands showWeather chicago"></CodeHighlight>
      <p class="text">{{ t('weather') }} 🏙️</p>
      <p class="text">{{ t('anotherText12') }}</p>
      <CodeHighlight code="commands --help"></CodeHighlight>
      <p class="text">{{ t('anotherText13') }}</p>
      <p class="text">{{ t('end2') }} 🎉</p>
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
