import {STACK_TAGS, StackType} from "../Pages/Stack/types";
import JsLogoPng from "../Resources/Icons/stack_icons/js_logo.png";
import ReactLogo from "../Resources/Icons/stack_icons/react.svg";
import VueLogo from "../Resources/Icons/stack_icons/vue.svg";
import FFmpegLogo from "../Resources/Icons/stack_icons/ffmpeg.png";
import JetbrainsLogo from "../Resources/Icons/stack_icons/jetbrains.svg";
import TasksManagementLogo from "../Resources/Icons/stack_icons/TasksManagement.svg";
import WikisLogo from "../Resources/Icons/stack_icons/Wiki's.svg";
import MarkdownLogo from "../Resources/Icons/stack_icons/Markdown.svg";
import PythonLogo from "../Resources/Icons/stack_icons/python.svg";
import CppLogo from "../Resources/Icons/stack_icons/cpp.svg";
import CSharpLogo from "../Resources/Icons/stack_icons/c_sharp.svg";
import PHPLogo from "../Resources/Icons/stack_icons/php.svg";
import AssemblerLogo from "../Resources/Icons/stack_icons/Assembler.svg";
import DartLogo from "../Resources/Icons/stack_icons/dart.svg";
import FlutterLogo from "../Resources/Icons/stack_icons/Flutter.svg";
import GoLangLogo from "../Resources/Icons/stack_icons/GoLang.svg";
import NLP_Logo from "../Resources/Icons/stack_icons/NLP.svg";
import TestingLogo from "../Resources/Icons/stack_icons/Testing.svg";
import OperationalSystemLogo from "../Resources/Icons/stack_icons/OperationalSystem.svg";
import DockerLogo from "../Resources/Icons/stack_icons/Docker.svg";
import FlaskFastLogo from "../Resources/Icons/stack_icons/flask_fast.svg";
import SQLLogo from "../Resources/Icons/stack_icons/sql.svg";
import ElasticsearchLogo from "../Resources/Icons/stack_icons/elasticsearch.svg";
import InfluxLogo from "../Resources/Icons/stack_icons/influx.svg";
import DesignLogo from "../Resources/Icons/stack_icons/Design.svg";


export const STACKS_ITEMS: Array<StackType> = [
    {
        name: "JavaScript",
        experience: "5 years",
        logo: JsLogoPng,
        description: {
            ru: `Все началось с HTML и jquery.
      Потом хотелось улучшать интерфейсы после чего работать над интерфейсами,
      особено нравилось работать над новыми идеями в UX. За все время работы с js
      я делал десятки лендингов, web-terminal, редактор кода, стриминговые сервисы для игр используя
      pixel-streaming от Unreal Engine и видео стриминг используя HLS и ffmpeg для небольших проектов.
      Для таких проектов основными инструментами для разработки приложений стали react и vue и material ui.
      Автоматическая генерация форм на основе jsonschema которая составлялась на основе yang-моделей. Я адаптировал
      стили встроенных сторонних frame'оф, используя MutationObserver.
      Приходилось решать проблемы оптимизации, решать проблемы с redux, который не был способен так быстро
      сохранять данные. Фото-редактор основанный на canvas и fabric.js интерфейс похожий на Figma Jam реализованый в DOM
      с добавлением чуть-чуть SVG. Dashboards с собсвенным DSL, графики, визуализация данных используя ApexChart, d3 и Recharts.
      Node.js для создания бекенда я выбирал редко, в основном когда были очень хорошие библиотеки решаюшие бизнес задачи и создавался
      отдельный микросервис или когда понимал, что команда сможет поддерживать только js.
      `,
            en: `Everything started with the HTML and jquery.
      Then I wanted to improve interfaces and then work on interfaces, I especially liked working on new ideas in UX.
      In all the time I've been working with js I've made dozens of website builds, web-terminal, code editor, streaming services for games using pixel-streaming from Unreal Engine and video streaming using HLS and ffmpeg for small projects.
      For these projects, react and vue and material ui became the main tools for application development.
      Automatic form generation based on jsonschema which was based on yang-models. I adapted the styles of embedded third-party frames using MutationObserver.
      I had to deal with optimization issues, dealing with redux, which wasn't able to save data as fast. Photo editor based on canvas and fabric.js interface similar to Figma Jam implemented in DOM with a bit of SVG included.
      Dashboards with custom DSL, charts, data visualization using ApexChart, d3 and Recharts.
      I've rarely used Node.js for the backend, mostly when I had very good libraries to solve business problems and created a separate microservice or when I realized that the team could only support js.
      `
        },
        tags: [STACK_TAGS.FrontEnd]
    },
    {
        name: "React",
        experience: "3 years",
        logo: ReactLogo,
        description: {
            ru: `Вперые я столкнулся с React когда наш фронтенд разработчик сдался в попытках понять кучу
      пайпов написанных в функциональном стиле. Это было экстримальное погружение, но иногда это работает.
      Использую классовые компоненты, когда не могу использовать функциональные - код чище. В основном использую redux
      уменьшая риски для поиска фронтенд разработчиков. Thunk и Саги, работал с mobX и effector но последние 2 года с
      redux-toolkit. Сложные рекурсивные компоненты, построение интерфейсов на основе DSL, построение UI систем
      согласованных с задумкой дизайнера как это возможно. WebSocket, WebRTC, Pixel Streaming от Unreal Engine.
      Тестирование компонентов и использование Storybook'ов.
      Небольшой опыт с SSR & SSG.
      `,
            en: `I first experienced React when our frontend developer gave up trying to understand a bunch of Pipes written in a functional style. It was an extreme dive, but sometimes it works.
      I use class components when I can't use functional components - the code is cleaner. I mostly use redux Reducing the risks of finding frontend developers.
      Thunk and Sagas, worked with mobX and effector but last 2 years with redux-toolkit. Complex recursive components, building DSL based interfaces,
      building UI systems UI systems with designer's idea of what's possible. WebSocket, WebRTC, Pixel Streaming from Unreal Engine.
      Component testing and using Storybooks.
      Little experience with SSR & SSG.`

        },
        tags: [STACK_TAGS.FrontEnd]

    },
    {
        name: "Vue",
        experience: "1 years",
        logo: VueLogo,
        description: {
            ru: `Vue & vuex. Последние проекты сделал на Typescript. Сервис для стриминга видео
      и интерфейс управления проектом на Unreal Engine через Pixel Streaming.
      `,
            en: `Vue & vuex. The last projects I did in Typescript. Video streaming service Project management interface on Unreal Engine via Pixel Streaming.`
        },
        tags: [STACK_TAGS.FrontEnd]

    },
    {
        name: "ffmpeg",
        experience: "1 years",
        logo: FFmpegLogo,
        description: {
            ru: `Настольная утилита на все случаи жизни. Разбить 4к видео на маленькие фрагменты разного размера и качества.
      Конвертировать формат изображений или превратить mp3 в wav или pcm. Даже использовал его на бекенде чтобы подготавливать
      фотографии загруженные пользователем - работало быстрее.
      `,
            en: `A desktop utility for all occasions. Split 4k video into small fragments of different size and quality.
      Convert image format or turn mp3 to wav or pcm. I even used it on the backend to prepare photos uploaded by user and it worked faster.`
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "JetBrains",
        experience: "1 years",
        logo: JetbrainsLogo,
        description: {
            ru: `В какой-то момент я осознано принял для себя решение, что безумно удобно скачать IDE для любого
      языка программирование и сыкономить кучу времени на разного рода настройки. Бесспорный плюс при изучении нового языка программирования.
      WebStorm, PyCharm, IntelliJ, GoLand - все это уже было интуитивно понятно при решении задач и изучении новых языков.
      Особенно встроенные возможности вроде http запросов. Целые команды, когда узнавали о них, сразу же начали использовать, что даже
      частично могло заменить нам Postman.
      Единственное исключение тут составлял C++ и C#, где при необходимости я однозначно выберу Visual Studio.
      `,
            en: `At some point I made a decision that it is really extremely convenient to download an IDE for any programming language and save a lot of time on various settings.
      An absolute plus when learning a new programming language.
      WebStorm, PyCharm, IntelliJ, GoLand were all already intuitive when solving problems and learning new languages.
      Especially the built-in features like http queries. Entire teams, when they learned about it, immediately started using it, which even could even partially replace Postman.
      The only exception was C++ and C# where I would definitely choose Visual Studio.`
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "Tasks Management ",
        experience: "1 years",
        logo: TasksManagementLogo,
        description: {
            ru: `Jira, YouTrack, Trello, Asana - и другие таск менеджера, которые были использовании в ходе творческого поиска руководителей
      проектов. Был опыт полного перестраивания процессов с целью избавления от ежедневной рутини и стандартизации процессов в
      маленькой компании. Все же бесконечные просьбы и демонстрации не прошли даром. Были пройдены все круги ада в
      построении инфраструктуры, которая действительно способствовала процессам. Туда входили и конфигурации CI/DI для разных окружений.
      Работа была выполнена, результатом стало упрощение процессов и осознание цены перестройки рабочих процессов.
      Самым частым инструментом, конечно, была Jira. Но моим однозначным фаворитом был YouTrack - за простоту, гибкость и интуитивность интерфейса,
      за Markdown и возможность составлять удобные дашборды.
      `,
            en: `Jira, YouTrack, Trello, Asana - and other task managers that were used in the creative search for project managers.
      I had the experience of completely rearranging processes in order to get rid of the daily routine and standardization of processes in a small company.
      All the endless requests and demonstrations were not in vain. All kinds of hell was gone through in building an infrastructure that really helped the processes.
      This included CI/DI configurations for different environments.
      The work was done, the result was a simplification of processes and a realizing of the cost of redesigning workflows.
      The most frequent tool, of course, was Jira. But my clear favorite was YouTrack - for its simplicity, flexibility and intuitiveness of the interface, for Markdown and the ability to make handy dashboards.
      `
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "Wiki's",
        experience: "1 years",
        logo: WikisLogo,
        description: {
            ru: `
      Confluence использовался для работы, а для личных нужд Notion. Оба инструмента обладают достаточным функционалом
      за исключением некоторых ситуаций когда вы храните устаревшию версию и например при импорте таблицы из CSV нельзя выбрать
      символ-разделитель и что большие статьи и таблицы приводят к некоторым проблемам при сохранении в Confluence.
      `,
            en: ` Confluence was used for work and Notion for personal use. Both tools have sufficient functionality except
      in some situations where you store an outdated version and when you import a table from CSV, for example,
      you cannot select delimiter character and that large articles and tables cause some problems when saving in Confluence.`
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "Markdown",
        description: {
            ru: `В эту секцию я решил поместить все, что связано с разметкой и ее генерацией. Грубо говоря M в MVC.
      Создатель всемирной паутины решил для нас и эту проблему, собственно я успел поработать с smMobileHeightLT(eXtensible Stylesheet Language),
      сейчас встретить эту технологию довольно трудно, грубо говоря это XML с циклами, условиями и переменными.
      В общем случае приходилось сталкиваться с Jinja2(Django) и подобными, например в Laravel. В vue/react я влюбился мгновенно,
      как многие другие. Он казался логичным и естественным продолжением и решал проблемы скорости работы DOM. Периодически посещавшие
      меня во время работы. Компоненты и JSX стали логичным продолжением.
      CSS, SCSS, styled components, css-modules и Emotion я тоже оставлю тут.`,
            en: `In this section I put everything related to markup and its generation. Roughly speaking M in MVC.
      The creator of the World Wide Web solved this problem for us as well, in fact I managed to work with smMobileHeightLT (eXtensible Stylesheet Language), Nowadays it's hard to find this technology, it's XML with loops, conditions and variables.
      In general I had to deal with Jinja2(Django) and stuff like that in Laravel for example. I fell in love with vue/react instantly, like many others. It seemed like a logical and natural extension and solved the DOM speed problems. It came to me from time to time while I was working. Components and JSX were a logical follow-up.
      CSS, SCSS, styled components, css-modules and Emotion - I leave it here too.
      `
        },
        experience: "5 years",
        logo: MarkdownLogo,
        tags: [STACK_TAGS.FrontEnd]

    },
    {
        name: "Python",
        experience: "5 years",
        logo: PythonLogo,
        description: {
            ru: `Изучения python я начал еще в университете чему способствовал Марк Лутц и его 4ое издание.
      Коммерчески поработать с python много не удалось, в основном это были небольшие микросервисы на Flask или FastApi.
      Тот же Django использовался только для университетских проектов. Python для меня был самым главным инструментом
      для решения любых задач: парсинг и скрапинг, тестирование возможностей стороних библиотек, боты, а так же интерфейсы
      используя tkinter и PyQt.
      Это был язык, который спас меня от MatLab, когда я проходил практику в Институте Искуственного Интеллекта где я познакомился
      с Word2Vec, Doc2Vec, FastText, TensorFlow и gensim в NLP, благодаря которым, я написал свою дипломную работу и использовал
      классификаторы, как микросервис обернутый в Flask.
      `,
            en: `I started learning python when I was in university, thanks to Mark Lutz and his 4th edition.
      I didn't manage to work with python much commercially, it was mostly small microservices on Flask or FastApi.
      Django was only used for university projects. Python for me was the most important tool  for everything: parsing and scraping,
      testing features of third party libraries, bots, and interfaces using tkinter and PyQt.
      It was the language that saved me from MatLab when I was doing an internship in the Artificial Intelligence Institute,
      where I was introduced to with Word2Vec, Doc2Vec, FastText, TensorFlow, and gensim in NLP, thanks to which, I wrote my graduate work and used classifiers as a microservice wrapped in Flask.
      `
        },
        tags: [STACK_TAGS.BackEnd]

    },
    {
        name: "С++",
        experience: "5 years",
        logo: CppLogo,
        description: {
            ru: `Мой первый язык программирования. Когда я впервые увидел книгу Страуструпа - было страшно.
      С ним я разобрался с тем как устроеен мир, стек и куча, что такое ссылки и указатели,
      сборшик мусора, ООП, использовал static_cast и dynamic_cast при изучении полиморфизма. Самую первую придуманную программу, которая
      позволяла объеденить несколько мессенджеров сразу, я сделал на c++, используя QT фреймворк. В целом это закаляет.
      Хочешь json - нужна библиотека, хочешь сделать http-запрос на windows - реши несколько проблем.
      Прошло уже несколько лет а помню до сих пор (проблемы а не c++).
      `,
            en: `My first programming language. When I first saw Stroustrup's book, it was scared.
      With him I learned how the world works, stack and heap, what references and pointers are, garbage collector, OOP, I used static_cast and dynamic_cast to study polymorphism. The first program I ever invented that was made in C++, using QT framework. All in all, it's hardening.
      You want json, you need library, you want to make http-request to windows, solve some problems.
      It's been a few years and I still remember (problems, not c++).
      `
        },
        tags: [STACK_TAGS.BackEnd]

    },
    {
        name: "C#",
        experience: "5 years",
        logo: CSharpLogo,
        description: {
            ru: `.net and asp.net - только ознокомительные проекты, WinForm и стандартная библиотека. Последний раз освежал знания после выхода .asp.net.
      Опыт в тестировании используя white фреймворк.`,
            en: `.net and asp.net - only the familiarization projects, WinForm and the standard library. Last time I refreshed my knowledge after the release of .asp.net.
      Experience in testing using white framework.`
        },
        tags: [STACK_TAGS.BackEnd]

    },
    {
        name: "PHP",
        experience: "5 years",
        logo: PHPLogo,
        description: {
            ru: `Я был молод мне нужны были деньги. В целом я использовал язык максимально как это было возможно. Начиная с
      5.6 и заканчивая 7.4, не застал только JIT. Всегда мигрировал на последние версии. Использовал типизацию как только она появилась.
      Ставили сборки от Facebook пока в этом был смысл. Так Были единичные опыты с Yii, Symphony но в основном я использовал Laravel.
      Именно благодоря подходам этого фреймворка и комьюнити вокруг него получалось делать сложные проекты.
      Я во всю пользовался возможностями сервис провайдеров в Laravel и успешно создавал сервисы на основе него используя вместе с
      Solr, ElasticSearch, Postgres, MySQL и RabbitMQ. Оформления собственных пакетов. Тут я впервые увидел настоящее легаси
      от которого кровь стынет в жилах, а автор кода не может объяснить почему тут так сделано. В целом если оценивать PHP -
      это пубертат. Язык довольно быстро учится, что позволило взять на себя задачи руководителя.`,
            en: `I was young I really needed money. In general, I used the language as much as possible. From 5.6 to 7.4, the only thing missing was JIT. Always migrated to the latest versions. Used typification as soon as it came out.
      We were building from Facebook while it made sense. Had some experiments with Yii, Symphony, but mostly I used Laravel.
      It was thanks to the approach of this framework and its community that I was able to make complex projects.
      I used Laravel as a service provider and successfully created services based on it using Solr, ElasticSearch, Postgres, MySQL and RabbitMQ. Designing my own packages.
      This was the first time I've seen a real legacy which makes my blood run cold, while the author of the code can't explain why it's done so. All in all, if I evaluate PHP - it's puberty.
      The language learns fairly quickly, which made it possible to take on the tasks of the team leader.

      Translated with www.DeepL.com/Translator (free version)`
        },
        tags: [STACK_TAGS.BackEnd]
    },
    {
        name: "Assembler",
        experience: "5 years",
        logo: AssemblerLogo,
        description: {
            ru: `Теоритически по памяти я смогу написать заголовок программы, объявить переменную в DB и вывести ее поместив
      в нужный регистр вызвав 21ое прерывания. В целом если бы не DOS и FASM в университете, обучение было бы гораздо успешнее.
      Я нашел статью посвященную ассемблеру с проектом который позволял удобно писать код на ассемблере, а потом выполнить его
      как в обычной IDE. Потом просто переписывал его на TASM и лабораторная была сдана. Поработал с математическим сопроцессором
      и даже сделал программу которая рисовала фигуры.`,
            en: `Theoretically from memory I could write a program header, declare a variable in DB and output it by placing it in the right register by calling 21st interrupt. All in all, if it were not for DOS and FASM at the university, the learning would have been much more successful.
      I found an article on assembler with a project which allowed me to comfortably write assembler code and then execute it like in a normal IDE.
      Then I just rewrote it in TASM and the lab was done. I worked with the math coprocessor and even made a program that drew shapes.
      `
        },
        tags: [STACK_TAGS.BackEnd]

    },
    {
        name: "Dart",
        experience: "5 years",
        logo: DartLogo,
        description: {
            ru: `Да это же Typescript. Крайний язык в изучении, по жизненому циклу похожий на javascript по синтаксису на обычный
      строго типизированный язык. Был изучен для единой цели - разработка приложений на Flutter. Классы, наследование, async.`,
            en: `It's Typescript. My latest language learned, similar in lifecycle to javascript in syntax to the usual strictly typed language.
      It was studied for the single purpose of developing applications in Flutter. Classes, inheritance, async.`
        },
        tags: [STACK_TAGS.Mobile]
    },
    {
        name: "Flutter",
        experience: "6 months",
        logo: FlutterLogo,
        description: {
            ru: `Все ради проекта gomusic.to. UI реализованный, как было запланировано при дизайне. Была освоена методология
      BLoC и имплементирована в проекте. Приложение успешно собирается для Android, IOS и WEB. Были переписаны необходимые
      кроссплатформенные библиотеки и написаны свои, общение которых, происходит через MethodChannel. Когда вопрос стал в выборе
      фреймворка для кроссплатформенной разработки проводя анализ и имея опыт например ReactNative - я пошел на риск и не пожалел.
      Да, проект не идеален, но как когда-то меня удивил QT сейчас это сделал Flutter.`,
            en: `Everything for the project gomusic.to.UI implemented as planned in the design. BLoC methodology was mastered and implemented in the project. The application is successfully built for Android, IOS and WEB. Necessary cross-platform libraries were rewritten and their own libraries were written, which communicate via MethodChannel. When the question arose about choosing a framework for cross-platform development through analysis and experience such as ReactNative - I took a risk and did not regret it.
      Yes, the project is not perfect, but as QT once surprised me, now Flutter has done it.
      `
        },
        tags: [STACK_TAGS.Mobile]
    },
    {
        name: "GoLang",
        experience: "6 months",
        logo: GoLangLogo,
        description: {
            ru: `Все ради проекта gomusic.to. Наш бекенд разработчик писал на всем что кодировалось. Он влюбился Go,
      наш DevOps чуть-чуть писал на Go и умел с ним работать. Он продал нам эту идею, но потом потерял интерес к проекту.
      Я уже говорил, что экстремальное погружение в язык программирования работает, когда нужно?
      Контекст, горутины, каналы и гексогональная архитектура. Судя по всему идея упрощения и оптимизации языка
      работает действительно хорошо и с языком получилось ознакомится достаточно быстро. `,
            en: `Everything for the project gomusic.to. Our backend developer wrote on anything possible. He fell in love with Go,
      our DevOps wrote a little bit of Go and knew how to work with it. He sold us the idea, but then lost interest in the project.
      Did I mention that extreme immersion in a programming language works when you need it?
      Context, goroutines, channels, and hexagonal architecture. Apparently the idea of simplifying and optimizing the language works really well and the language has become familiar to me quite quickly.
      `
        },
        tags: [STACK_TAGS.BackEnd]
    },
    {
        name: "AI & ML for NLP",
        experience: "6 months",
        logo: NLP_Logo,
        description: {
            ru: `В университете мне понравилась сама возможность и ход мыслей для решения задачь NLP.
      В целом то, что я обрел в этой области - это красоту применения математики для решения проблем.
      Слова представленные в многомерном пространстве... По собственным ощущением мне удалось обрести определенный
      склад ума для решения подобных задач, когда явным алгоритмом проблема не решается.
      Благодаря этой области я пользовался TensorFlow, gensim, kaggle и загружал компьютер на 44 часа когда тестировал
      автоматический набор параметров. В данный момент это просто хобби 😃
      `,
            en: `At university, I loved the very possibility and thought process for solving NLP problems.
      Overall, what I found in this field was the beauty of applying mathematics to problem solving.
      Words presented in multidimensional space... I feel I've been able to acquire a certain
      mindset for solving such problems, when the explicit algorithm doesn't solve the problem.
      Thanks to this area, I used TensorFlow, gensim, kaggle, and loaded my computer for 44 hours when testing
      automatic parameter set. At the moment it's just a hobby 😃
      `
        },
        tags: [STACK_TAGS.Utilities]
    },
    {
        name: "Testing",
        experience: "6 months",
        logo: TestingLogo,
        description: {
            ru: `Тестирование интерфейсов используя White Framework(c#). Тестирование Web интерфейсов используя
      Selenium(python, js), нагрузочное тестирование через JMeter и Yandex.Tank, опыт с Cucumber и синтаксисом Gherkin.
      `,
            en: `Testing interfaces using White Framework(c#). Web interface testing using Selenium(python, js), load testing via JMeter and Yandex.Tank, experience with Cucumber and Gherkin syntax.`
        },
        tags: [STACK_TAGS.Utilities]
    },
    {
        name: "Operational Systems",
        experience: "6 months",
        logo: OperationalSystemLogo,
        description: {
            ru: `Разрабатывал на Windows, Linux(Ubuntu, Centos) и MacOS.
      Знаю причины почему Docker не может смонтировать volume на Windows.
      Работал с WSL, собирал python с исходников и rpm пакеты на машинах без интернета.
      Знаю базовые команды Linux и в общих чертах понимаю принципы работы.`,
            en: `Developed on Windows, Linux (Ubuntu, Centos) and MacOS.
      I know the reasons why Docker cannot mount volume on Windows.
      Worked with WSL, built python from source and rpm packages on machines without internet.
      I know basic Linux commands and have a basic understanding of how things work.`
        },
        tags: [STACK_TAGS.Utilities]
    },
    {
        name: "Docker",
        experience: "6 months",
        logo: DockerLogo,
        description: {
            ru: `Опыт в создании контейнеров для сборки frontend и запуска приложений на Go, Python, Node.js, PHP и Postgres.
      Иногда docker яявлялся не очевидным решением для некоторых промежуточных модулей, которые могли работать только с глобальными
      настройками и зависимостями. В состоянии описать образ, настроить сеть, смонтировать volume.
      `,
            en: `Experience in building containers to build frontend and run Go, Python, Node.js, PHP and Postgres applications.
      Sometimes docker was not an obvious solution for some middleware modules that could only work with global settings and dependencies.
      Being able to describe an image, configure a network, mount a volume.`
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "Flask & Fast Api",
        experience: "6 months",
        logo: FlaskFastLogo,
        description: {
            ru: `Опыт в создании простых REST приложений выполняющих CRUD операции или роль легкой HTTP обертки для классификаторов на Python.`,
            en: `Experience in creating simple REST applications that perform CRUD operations and the role of a lightweight HTTP wrapper for classifiers in Python.`
        },
        tags: [STACK_TAGS.BackEnd]
    },
    {
        name: "SQL",
        experience: "3 months",
        logo: SQLLogo,
        description: {
            ru: `Язык структиророванных запросов созданный для баз данных, созаднных на основе реляционной алгебры.
      Если упрощать, то фактически SQL является стандартом, а реализация и поддержка зависит от производителя обеспечения самих баз данных
      также как и других внутренних.
      Postgres`,
            en: `A structured query language designed for databases based on relational algebra.
      To simplify, SQL is actually a standard, and the implementation and support depends on the manufacturer of the database software itself as well as other internals.
      Postgres`
        },
        tags: [STACK_TAGS.BackEnd]

    },
    {
        name: "ElasticSearch",
        experience: "3 months",
        logo: ElasticsearchLogo,
        description: {
            ru: `В рамках одного из проектов была задача разработать платформу для оркестрирования приложения.
      В рамках этого проекта мы делали интерфейс который позволял визуализировать данные из разных источников,
      например ElasticSearch и Influx, а так же смог бы разделять созданные индексы по правам пользователей (используя SSO).
      Для эластика дополнительно были созданы инструменты частично повторяющие функционал Kibana.
      Сложные агрегационные запросы, теггирование, настройка индексов и привилегий.
      `,
            en: `As a part of one of the projects we had the task to develop a platform for application orchestration.
      As a part of this project, we made an interface that allows to visualize data from different sources, such as ElasticSearch and Influx, as well as to divide the created indexes by user rights (using SSO).
      For Elastic, additional tools have been created that partially replicate the functionality of Kibana.
      Complex aggregation queries, tagging, index and privilege customization.
      `
        },
        tags: [STACK_TAGS.Utilities]
    },
    {
        name: "Influx",
        experience: `3 month`,
        logo: InfluxLogo,
        description: {
            ru: `Резюмируя. Ознакомлен с time series базами данных. Настройка привилегий, получилось полностью повторить
      UI интерфейс из Influx 2.0 структуру measurements, fields & buckets запрашивалась при помощи python.`,
            en: `To summarize. Familiarized with time series databases. Privilege customization,
      got a full replication of the UI interface from Influx 2.0 the structure of measurements, fields & buckets was queried using python.`
        },
        tags: [STACK_TAGS.Utilities]

    },
    {
        name: "UI/UX & Figma",
        experience: `3 month`,
        logo: DesignLogo,
        description: {
            ru: `Я часто работал над проектами, где в команде не было дизайнера, так я и погрузился в тему пользовательского опыта, я часто создавал дизайн и придумывал решения на ходу во время фронтенд разработки. Для меня всегда было важно, как именно человек будет пользоваться моим интерфейсом, я по максимуму упрощаю, минимизирую количество шагов, и добавляю пояснения, где есть вероятность заблудиться.  Для более объемных задач я освоил фигму.  Даже глубже чем дизайнеры - я писал плагины для нее, для автоматизации некоторых рутинных задач. Но на этом мой путь в дизайне только начинался. Для создания своего приложения мне было необходимо погрузиться в тему пользовательского взаимодействия. Я изучил принципы UX, узнал о законах построения дизайна и психологии восприятия пользователями. Так же капнул в сторону UI, с учетом моей деятельности, как разработчика - у меня уже была настроенность и я понимал, какой интерфейс проживет на рынке несколько следующих лет, исходя из этого я и создал дизайн для Gomusic.to. Так же беря во внимание привычные паттерны поведения (например я добавил строку ввода ссылки, несмотря на то, что приложение автоматически считывает буфер, для того, чтобы человек понял, что от него требуется вернуться в приложение со ссылкой - просто и понятно, без лишних слов)`,
            en: 'I worked a lot on projects where the team didn\'t have a designer, so I got immersed in the topic of user experience, I was often designing and coming up with solutions on the go during frontend development. It\'s always been important to me exactly how a person would use my interface, I simplify as much as possible, minimize the number of steps, and add explanations where there\'s a chance of getting lost.  For more extensive tasks, I\'ve learned Figma.  Even deeper than designers - I wrote plugins for it, to automate some routine tasks. But that was only the beginning of my design journey. To create my app, I needed to dive into the topic of user interaction. I studied the principles of UX, learned about the laws of design construction and the psychology of user perception. I also dug into UI, taking into account my background as a developer - I already had an attitude and understanding of what kind of interface would be good for the next few years, so I created the design for Gomusic.to. Also taking into account the usual patterns of behavior (for example I added a link input line, even though the app automatically reads the buffer, so that the person understands that he has to go back to the app with the link - simple and clear, without any extra words)'
        },
        tags: [STACK_TAGS.FrontEnd]
    },
];

export const FRONTEND_ITEMS = STACKS_ITEMS.filter( si => si.tags?.includes(STACK_TAGS.FrontEnd) ).map( si => si.name);
export const BACKEND_ITEMS = STACKS_ITEMS.filter( si => si.tags?.includes(STACK_TAGS.BackEnd) ).map( si => si.name);
export const MOBILE_ITEMS = STACKS_ITEMS.filter( si => si.tags?.includes(STACK_TAGS.Mobile) ).map( si => si.name);
export const UTILITIES_ITEMS = STACKS_ITEMS.filter( si => si.tags?.includes(STACK_TAGS.Utilities) ).map( si => si.name);

export type StackByGroupsType = { [key in STACK_TAGS]: Array<string> };
export const STACK_BY_GROUPS: StackByGroupsType = {
    [STACK_TAGS.FrontEnd]: FRONTEND_ITEMS,
    [STACK_TAGS.BackEnd]: BACKEND_ITEMS,
    [STACK_TAGS.Mobile]: MOBILE_ITEMS,
    [STACK_TAGS.Utilities]: UTILITIES_ITEMS,
}

export default STACKS_ITEMS;
