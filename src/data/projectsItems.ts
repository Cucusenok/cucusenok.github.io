import {ProjectType} from "../Pages/Projects/types";
import bike_net from "../Resources/Icons/companies/bike_net.svg"
import img from "../Resources/Projects/AppImages/bike.net/img.png"
import img1 from "../Resources/Projects/AppImages/bike.net/img_1.png"
import img2 from "../Resources/Projects/AppImages/bike.net/img_2.png"
import img3 from "../Resources/Projects/AppImages/bike.net/img_3.png"
import img4 from "../Resources/Projects/AppImages/bike.net/img_4.png"
import treeInOne from "../Resources/Projects/AppImages/bike.net/3in1.png"

import durex_logo from "../Resources/Icons/companies/durex.svg"
import durex from "../Resources/Projects/AppImages/durex/durex.png"
import durex_app from "../Resources/Projects/AppImages/durex/app.png"
import durex_admin from "../Resources/Projects/AppImages/durex/admin.png"

import kia from "../Resources/Icons/companies/kia.svg"



import skoltech_map from "../Resources/Icons/companies/skoltech_map.svg"
import skoltech_5g from "../Resources/Icons/companies/skoltech_5g.svg"

import frieze_logo from "../Resources/Icons/companies/frieze.png"
import frieze_1 from "../Resources/Projects/AppImages/frieze/img.png"
import frieze_2 from "../Resources/Projects/AppImages/frieze/img_1.png"
import frieze_3 from "../Resources/Projects/AppImages/frieze/img_2.png"
import frieze_4 from "../Resources/Projects/AppImages/frieze/img_3.png"
import frieze_5 from "../Resources/Projects/AppImages/frieze/img_4.png"
import frieze_6 from "../Resources/Projects/AppImages/frieze/img_5.png"


import sightline from "../Resources/Icons/companies/sightline.png"
import neo4web_1 from "../Resources/Projects/AppImages/neo4web/img_1.png"
import neo4web_2 from "../Resources/Projects/AppImages/neo4web/img_2.png"
import neo4web_3 from "../Resources/Projects/AppImages/neo4web/img_3.png"
import neo4web_4 from "../Resources/Projects/AppImages/neo4web/img_4.png"
import neo4web_5 from "../Resources/Projects/AppImages/neo4web/img_5.png"

import go_music from "../Resources/Icons/companies/go_music.svg"
import go_music_1 from "../Resources/Projects/AppImages/go_music/img.png"
import go_music_2 from "../Resources/Projects/AppImages/go_music/img_1.png"
import go_music_3 from "../Resources/Projects/AppImages/go_music/img_2.png"
import go_music_4 from "../Resources/Projects/AppImages/go_music/img_3.png"

import acg from "../Resources/Icons/companies/acg.png"
import acg_1 from "../Resources/Projects/AppImages/acg/img.png"
import acg_2 from "../Resources/Projects/AppImages/acg/img_1.png"
import acg_3 from "../Resources/Projects/AppImages/acg/img_2.png"


export const PROJECT_ITEMS: Array<ProjectType> = [
    {
        name: "5G(O-RAN)",
        title: {
            ru: "Конфигурация устройств 3gpp/LTE/5g в архитектуре O-RAN",
            en: "Configuration of devices 3gpp/LTE/5g in O-RAN architecture"
        },
        url: "",
        position: "Software Engineer",
        logo: skoltech_5g,
        description: { ru: `Разработка системы мониторинга и конфигурации устройств 3gpp/LTE/5g в архитектуре O-RAN`, en: `Development of 3gpp/LTE/5g device monitoring and configuration system in O-RAN architecture` },
        text: {
            ru: `O-RAN - идея совместемых мобильных систем. Упрощая можно сказать, что если у вас вышло из строя
      устройство производителя X вы сможете заменить его устройства производителем Y, без потери совместимости.
      Я вернулся к миру конспектов и методу проб и ошибок, так как сфера была абсолютно из другого мира для меня,
      а найти достойную хорошую информацию было не так просто.
      Перед нашей командой встала задача разработать систему для мониторинга и конфигурации CU/DU/RU. Эти устройства
      могут быть реализованы в зависимости от типа сети в разной архитектуре. Конфигурация устройства обеспечивается confD -
      наша задача была этот конфиг составить и доставить по протоколу NETCONF.
      В рамках проекта был реализован UI на основе YANG-моделей (язык построения моделей данных). В зависимости от
      версии меняется YANG-модель и интерфейс должен автоматически перестроится. Это была сложная задача с точки зрения
      дизайна такого UI в первую очередь. В свою очередь этот интерфейс должен включаться в глобальную систему конфигурации (NMS)
      и для отдельного сетевого элемента (EMS) (включая кейс когда человек может подключится используя patch cord, перейти
      по ссылке в браузере и начать конфигурацию). Так же мы реализовали удаленный терминал для доступа к машине с очень
      хорошим интерфейсов с иторичностью, поиском и шаблоными комманд. Дашборды с графиками, которые настраиваются по
      тем параметрам, которые мы получаем первым кадром при подключении к сокету. Все графики и дашборды стилистически
      настраевыемые и могут быть размешенны как угодно в дашборде.
      `,
            en: `O-RAN is the idea of standardization of mobile systems. Simply put, if your device from manufacturer X is out of service, you can replace it with 
            a device from manufacturer Y without losing compatibility. I returned to the world of technical specifications and trial-and-error methods as this field was completely foreign to me 
            and finding good information was not easy. Our team was tasked with developing a system for monitoring and configuring CU/DU/RU devices. 
            These devices can be implemented in different architectures depending on the network type. The device configuration is provided by confD - 
            our task was to compose this configuration and deliver it over the NETCONF protocol. As part of the project, a UI based on YANG models (a data model construction language) was implemented. 
            The YANG model and the interface should change automatically depending on the version. This was a difficult task in terms of designing such a UI primarily. 
            In turn, this interface must be included in the global configuration system (NMS) and for a separate network element (EMS) (including the case when a person can connect to it independently).`
        },
        images: []
    },
    {
        name: "MAP",
        title: {
            ru: "Создание системы оркестрации и мониторинга контейнеров",
            en: "System of orchestration and monitoring for containers"
        },
        url: "",
        position: "Software Engineer",
        logo: skoltech_map,
        description: { ru: `Разработка системы для оркестрации приложений`, en: `System development for application orchestration` },
        text: {
            ru: `Система оркестрации, разворачивания и контроля над контейнерами. Это был фактически Kubernetes c GUI.
      Трассировка - Zipkin, хранение данных MongoDB и Postgres, работа с логами - Kafka и ElasticStack, очереди - RabbitMQ.
      Для удобства работы с логами был реализован интерфейс позволяющий быстро создавать GROK-паттерны на их основе.
      Начали думать о частичной автоматизации этого процесса. Следели за состоянием всех контейнеров системы.
      В ручном режиме по клику кнопки могли остановить, перезагрузить или запустить контейнер. Научились деплоить приложения на
      Java, Golang, Node.Js, Docker-контейнеры и статические сайты. Разработали систему SSO, позволяющую закрыть за собой вопрос
      авторизации в связанные сервисы, и использовать ее у себя в системе. Сделали иерархичную систему RBAC которая могла ограничивать
      доступ к данным на основании роли пользователя ко всем хранилищам системы. Система автоматического алертинга основанная на правилах,
      которые можно было настроить в GUI. Если нам нужна структура данных - скорее всего это должен быть очень гибкий DSL.
      Планирование и исследование технических решений, анализ продуктов, совместная архитектура системы, иногда на 2-3 месяца вперед.

      Искренне сожалею о завршении работы над этим проектом. Замечательная команда профессионалов о которой
      я вспоминаю с теплотой и самая высокая эффетивность которую я когда либо выдел.
      Я читал о таком, но тут мне посчастливилось поучаствовать.
      `,
            en: `An orchestration, deployment and container control system. It was actually Kubernetes with a GUI.
      Zipkin tracing, MongoDB and Postgres data storage, Kafka and ElasticStack logging, RabbitMQ queues.
      For the convenience of working with logs we implemented an interface that allows you to quickly create GROK patterns on their basis.
      We began to think about partially automating this process. Monitoring the state of all the containers in the system. 
      We were able to manually stop, restart or start the container by clicking the button. 
      We learned how to deploy applications in Java, Golang, Node.Js, Docker containers and static sites. Developed SSO system allowing to close the issue with authorization to related services, 
      and use it in your system. Made a hierarchical RBAC system that could restrict Access to data based on user role to all storages of the system. 
      An automatic rule based alerting system, which could be configured in the GUI. If we need a data structure - it should probably be a very flexible DSL. 
      Planning and researching technical solutions, product analysis, collaborative system architecture, sometimes 2-3 months in advance. 
      I sincerely regret that this project was closed.The team was fantastic and I recall it with warmth, and their efficiency was the highest I've ever seen.
      I've heard about it, but I was lucky enough to be part of it.`
        },
        images: []
    },
    {
        name: "Go Music",
        title: {
            ru: "Приложение для того чтобы распозновать и делиться музыкой.",
            en: "App for sharing and recognition music"
        },
        url: "https://bike.net",
        position: "Software Engineer",
        logo: go_music,
        description: { en: `Integration market place to social network for bikers.`, ru: 'Интеграция маркетплейса в социальную сеть для велосипедистов' },
        text: {
            ru: `Оставили как-то комманду специалистов без занятия. Вот они свои знания и умения применили.
      Кроме меня в команде никто не сталкивался с кросслпатформенной разработкой и в итоге
      мы выбрали для MVP стек из Flutter и Golang. Тестируем кросплатформу через Appium.
      Интеграций планировалось много еще на начале проекта по-этому для нас было важно очень
      четко описывать процесс взаимодействия с другими сервисами - POSTMAN и делать детальные статьи
      по описанию интеграций.
      Конкуренты которые решали данную задачу на рынке есть, но самая главная отличительная
      черта нашего приложения - мы смогли упростить процесс до 3х простых действий.
      Пользователь копирует ссылку на трек в Apple Music, Spotify или TikTok - и открывает
      аудио запись где хочет.
      Мы не требуем авторизацию от пользователя - она пока нам не нужна.
      Я упорно работал над кроссплатформенным интерфейсом, я хотел прийти к UI-kit который
      будет действительно удобен для Android и IOS пользователей, так же мы не забывали про Web.
      Пытались прийти к понятному интерфейсу, чтобы он действительно был понятен для пользователя.
      Это, например, причина почему в приложении есть поле ввода, которым никто никогда не
      воспользуется т.к. если вы скопировали ссылку на плейлист в Apple Music и открыли наше
      приложение - вы скорее всего хотели воспользоваться нашими функциями, но это поле
      призывает пользователя к привычному взаимодействию.
      Мы смогли настроить автоматическую IOS сборку и доставку приложения в TestFlight.
      Решали все проблемы со сборкой которые возникали с Flutter и уже пол года нам удается их
      не испытовать.
      Первый проект в котором я действительно смог прочувствовать плоды многих лет обучения и
      труда вложенных в профессию. Проект поменявший мое отношение к работе.
      `,
            en: `Once a team of specialists was left without occupation. So they put their knowledge and skills to use.
      No one in the team except me had encountered cross-platform development and as a result we chose a stack of Flutter and Golang for the MVP. We are testing cross-platform through Appium.
      We planned a lot of integrations in the beginning of the project, so it was very important for us to clearly describe the process of interaction with other services - POSTMAN and create detailed articles describing the integrations.
      There are competitors who solved this problem on the market, but the most important feature of our application is that we were able to simplify the process to 3 simple steps.
      The user copies the link to the track in Apple Music, Spotify or TikTok - and opens the audio record wherever he wants.
      We don't require user authorization - we don't need it for now.
      I worked hard on the cross-platform interface, I wanted to come to the UI-kit, which would be really comfortable for Android and iOS users, as well as we did not forget about the Web.
      We tried to make the interface intelligible, so that it would really make sense to the user.
      This is for example the reason why there is an input field in the app, which no one would ever use, because if you copied the link to the playlist in Apple Music and opened our app - you most likely wanted to use our features, but this field calls the user to the usual interaction.
      We were able to set up automatic IOS builds and app delivery in TestFlight.
      We solved all the build problems that we had with Flutter and we've managed to not have them for half a year now.
      The first project I was able to feel the benefits of many years of training and work invested into my profession. This project changed my attitude to work.
      `
        },
        images: [go_music_4, go_music_1, go_music_2, go_music_3]
    },
    {
        name: "bike.net",
        title: {
            ru: "Интеграция маркет плейса в социальную сеть",
            en: "Integration market place to social network",
        },
        url: "https://bike.net",
        position: "Software Engineer",
        logo: bike_net,
        description: { en: `Integration market place to social network for bikers.`, ru: 'Интеграция маркетплейса в социальную сеть для велосипедистов' },
        text: {
            ru: `На доработку был получен проект с целью интеграции маркет плейса в существующую социальную сеть. С личным кабинетом пользователя и компании, с возможностью поиском и фильтрацией товаров по цене и категории, реализация блока “Похожие товары” а так же обеспечить поддержку нескольких языков. Проект был реализован на самописном MVC фреймворке с MySQL в качестве базы данных и Solr(схожий продукт с ElasticSearch) в качестве поискового движка. Вся фильтрация и поиск товаров был реализован на Solr. При создании и обновлении записи, после обновления их в базе данных создавалась задача на обновления их в поиске. Для генерации HTML был использован PHP и smMobileHeightLT(это язык для преобразования XML документов). Solr и smMobileHeightLT для этого проекта пришлось изучить. `,
            en: `The project was received for modifications in order to integrate the marketplace into the existing social network. With a personal account of the user and the company, with the ability to search and filter products by price and category, the implementation of the block "Similar products" as well as to provide support for multiple languages. The project was developed on a MVC framework with MySQL as database and Solr (similar product to ElasticSearch) as search engine. All filtering and product search was implemented on Solr. When a record was created and updated, after they were updated in the database, a task was created to update them in the search. PHP and smMobileHeightLT (that's a language to convert XML documents) were used to generate HTML. Solr and smMobileHeightLT had to be learned for this project.`
        },
        images: [img, img1, img2, img3, img4, treeInOne]
    },
    {
        name: "Neo4Web",
        title: {
            ru: "Стриминговый сервис для подбора квартиры",
            en: "Streaming service for apartments viewing"
        },
        url: "https://www.sightline.se/neo4-web?lang=en",
        position: "Frontend Engineer",
        logo: sightline,
        description: { en: `Streaming service for apartment previews.`, ru: 'Стриминговый сервис для просмотра апартаментов.' },
        text: {
            ru: `Web приложение управляющее проектом Unreal Engine(UE) с возможностью перемещаться по городу, выбрать
      аппартаменты и зайти в них. Была реализована возможность фильтрации апартаментов по цене, количеству
      комнат, квадратуре и т.д. Общение с UE было реализовано при помощи Pixel Streaming по протоколу WebRTC.
      Самое сложное в этом проекте было разобраться с тем как UE реализовало общение по WebRTC. Из примеров,
      в Safari и Mozilla были некоторые простые ошибки, которые поправили только через несколько версий.
      Некоторые из них были строчка в строчку, нахожу это забавным 😃
      Проекты были реализованы при помощи React и Vue.
      `,
            en: `A web application that manages Unreal Engine (UE) projects with the ability to navigate around the city, 
            choose apartments and enter them. The ability to filter apartments based on price, number of rooms, square footage, etc. was implemented. 
            Communication with UE was realized through Pixel Streaming using the WebRTC protocol. The most challenging aspect of this project was figuring out how UE implemented communication through WebRTC. 
            There were some simple errors in Safari and Mozilla that were only fixed in a few versions. 
            Some of them were line by line, I find it amusing 😃. 
            The projects were implemented using React and Vue.
            `
        },
        images: [neo4web_1, neo4web_2, neo4web_3, neo4web_4, neo4web_5, neo4web_5]
    },
    {
        name: "Frieze",
        title: {
            ru: "Онлайн галерея",
            en: "Online Viewing Room",
        },
        url: "https://www.sightline.se/neo4-web?lang=en",
        position: "Frontend Engineer",
        logo: frieze_logo,
        description: { en: `Integration viewing room gallery to the site.`, ru: 'Integration of an online gallery on the website.' },
        text: {
            ru: `Интеграция онлайн галлереи в уже существующий сайт. Идеальная вертска и учет всех нюансов
      для максимального правильного отображения фото и видео материалов. Разработка UI-kit, двойная
      аутентификация по номеру телефона.`,
            en: `Integration of an online gallery into an already existing website. 
            Perfect layout and consideration of all details for the correct display of photo and video materials. 
            Development of a UI-kit and double authentication by phone number.`
        },
        images: [frieze_1, frieze_2, frieze_3, frieze_4, frieze_5, frieze_6]
    },
    {
        name: "Durex(Match)",
        title: {
            ru: "Создание Tinder-like приложения",
            en: "Tinder-like application"
        },
        url: "https://m.vk.com/app6999162",
        position: "Software Engineer",
        logo: durex_logo,
        description: { ru: `Доработка frontend и разработка бекенда Tinder-like приложения в Iframe приложения vk.com.`, en: `Finalization of the frontend and development of the backend of the Tinder-like application in the Iframe application vk.com.` },
        text: {
            ru: `В уже существующее приложение был интегрирован функционал приложения повторяющего механику Tinder.
      Задачей было увеличить интерес к бренду путем создания маркетингового приложения пользователи которого
      смогли бы активно взаимодействовать. Основная идея: пользователь проходит тест и отсылает специальную
      ссылку человеку, этот человек тоже проходит тест после чего им присылаются результаты с совпадениями.
      Клиент был реализован на Javascript + ReactJs, backend при помощи PHP + Laravel. База данных, MySQL.
      Пользователям было необходимо получать уведовмления после того как их друзья проходят тестирования.
      Из-за ограничений платформы по количеству push-уведомлений (1 в день), была придумана механика при которой
      пользователь активирует специального чат-бота и все уведомления с результами получает в сообщениях бота.
      Данный функционал был реализован при помощи RabbitMQ и нескольких воркеров которые вычитывали очереди.
      Количество активных пользователей доходило до 50 000 в день.
      `,
            en: `I added a feature that mimics the mechanics of the popular dating app, Tinder, to an existing application of our client. 
            The goal was to increase brand interest by creating a marketing app where users could actively engage with each other. 
            Here's how it works: a user takes a test and sends a special link to another person. 
            That person also takes the test and they both receive results with any matching score. 
            The frontend was built using JavaScript and ReactJS, while the backend was created using PHP and Laravel, and the database was powered by MySQL. 
            Users needed to receive notifications after their friends took the test, but because of platform limitations on push notifications (1 per day), 
            I came up with a solution where users could activate a special chatbot and receive all notifications with results through messages from the bot. 
            This was implemented using RabbitMQ and several workers that read the queues. We had up to 50,000 active users per day!`
        },
        images: [durex, durex_admin, durex_app]
    },
    {
        name: "KIA(CAP)",
        title: {
            ru: "Система автоматической отчетности",
            en: "The automatic reporting system"
        },
        url: "https://m.vk.com/app6999162",
        position: "Software Engineer",
        logo: kia,
        description: { ru: `Система для создания автоматической отчетности диллеров автомобилей KIA по всей стране`, en: `System for creating automatic reporting of KIA car dealers across the country` },
        text: {
            ru: `У KIA была сеть диллеров распространенная по всей стране.
      Диллеры должны были организовывать рекламные компании через Google.Ads и Yandex.Direct.
      В зависимости от региона, модели авто и типов объявления (текстовые, изображения, видео) необходимо было предоставить диллерам
      детальный отчет с итоговой компенсацией за рекламные компании.
      Итоговая реализация требовала от меня реализации UI с возможностью скачать детальный отчет в формате Xls и
      отдавать сторонним системам данные в формате JSON.
      Итоговая реализация выглядела следующим образом: отложенная очередь раз в N промежуток времени выполняла запросы
      к Yandex.Direct и к Google.Ads c фильтром по времени который должен был ограничивать размер пакета. Одно из ограничений
      системы - т.к. Yandex.Direct и Google.Ads фактически являются аукционном по продаже рекламы - реальную итоговую
      стоимость можно было получить только за вчера.
      Если запрос по какой-то причине не удался или система не смогла дойти до состояние завершения - очередь помещалась
      в DLE, а администратору системы приходило уведомление. Если системе не удавалось восстановиться самой, необходимо было
      выяснить причины и внести изменения, а после перезапуска система должна была сама выполнить те задачи которые не были
      завершены успешно. На экстренные случае были созданы механизмы ручного запуска сборки данных.
      Все собранные данные помещались в Clickhouse. После чего дальше этапы делятся на 2: регулярные отчеты и отчеты свободной формы.
      Из-за огромного количества записей (50 000 000 в месяц в среднем), генерации таких отчетов могли занимать длительное время -
      было принято решение подготавливать такие отчеты и кэшировать зарание каждое первое число каждого месяца.
      Для валидации корректности собранных данных, итоговая сумма, отданная по заданым фильтрам, получаемая от
      Yandex.Direct и Google.Ads, должна сходится с собранными данными в ClickHouse.
      Отчеты свободной формы могли быть получены двумя способами:
      запрос на создание отчета с необходимыми параметрами, после завершения формирования отчета,
      система информировала на callback url и интегрируемой системе оставалось только его забрать либо путем синхронного запроса,
      ожидая пока система сформирует отчет (решение было принято фирмой подрядчиком, все технические специалисты были проинформированы
      о рисках данного технического решения).
      `,
            en: `KIA had a nationwide network of dealers.
      Dealers had to organize advertising campaigns through Google.Ads and Yandex.Direct.
      Depending on the region, car model, and ad types (text, image, video), the dealers had to provide a detailed report with the final payoff for the ad campaigns.
      The final implementation required me to implement a UI with the ability to download a detailed report in Xls format and to give third-party systems the data in JSON format.
      The final implementation looked like this: a pending queue every N time interval to execute queries to Yandex.Direct and to Google.Ads with a time filter that had to limit the packet size. One of the restrictions of the system - as Yandex.Direct and Google.Ads are in fact an advertising auction - the real total was only available for the previous day.
      If the request for some reason failed or the system could not reach the completion state - the queue was placed to DLE, and the system administrator was notified. If the system failed to restore itself, it was necessary to find out the reasons and make changes, and after restarting the system should have to perform the tasks that  had not been finished successfully  itself. In case of an emergency, mechanisms were created to manually start the data collection.
      All collected data was placed in Clickhouse. After that, further stages were divided into the following: regular reports and free-form reports.
      Due to the huge amount of records (50 000 000 per month on average), generation of such reports could take a long time. So we decided to prepare such reports and cache them in advance on the first day of each month.
      In order to validate the correctness of the data collected, the totals given by filters from Yandex.Direct and Google.Ads should match the data collected in ClickHouse.
      Free form reports could be obtained in two ways:
      by requesting a report with the required parameters, after the report was generated, the system informed on the callback url and 
      the integrated system only had to pick it up or by synchronous request, waiting for the system to generate the report 
      (the decision was made by the contractor company, all the technical specialists were informed about the risks of this technical solution).
      `
        },
        images: []
    },
    {
        name: "Alfa Crypto Group",
        title: {
            ru: "Alfa Crypto Group",
            en: "Alfa Crypto Group"
        },
        url: "https://echostudio.xyz/works.html",
        position: "Software Engineer",
        logo: acg,
        description: { ru: `Создание сайта со стримингом motion-видео на превью`, en: `Creating a website with streaming motion video on the preview` },
        text: {
            ru: `При создании проекта в сотруднечестве с UI/UX и моушен дизайнерами а также двумя начинающими разработчиками, задача выглядела так: 
            получить дизайн и видео в 4к разрешении от дизайнеров, сверстать страницу и интегрировать видео.
            Для оптимизации воспроизведения видео использовался HLS протокол, а в зависимости от размера экрана пользователя и скорости 
            интернета использовалось потоковое видео предварительно подготовленное при помощи ffmpeg. Так же была разработана архитектура
            платежной системы чтобы избавится от комиссий платежного сервисов.`,
            en: `Creation of the Landing Page in collaboration with UI/UX and motion designers, as well as two beginner developers. The task was: get the design and video in 4k resolution from the design team, make front-end of the page, and integrate the video.
HLS protocol was used to optimize video playback and depending on user screen size and Internet speed was used streaming video pre-prepared with the help of ffmpeg. The architecture of the payment system to get rid of the fees of the payment services.`
        },
        images: [acg_1,acg_2,acg_3,]
    },
]

export default PROJECT_ITEMS;
