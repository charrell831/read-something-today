"use client";

export enum ReadingTopics {
    PALESTINE = 'Palestine',
    LGBTQIA = 'LGBTQIA+',
    RACIAL_JUSTICE = 'Racial Justice',
    CONGO = 'Congo',
    SUDAN = 'Sudan'
}

function Readings() {
    const readings = [
        {
            articleLink: 'https://kohljournal.press/reading-audre-lorde-palestine',
            title: 'Reading Audre Lorde in Palestine: Exploring Differences between Generative and Extractive',
            author: 'Rana Barakat',
            type: ReadingTopics.PALESTINE 
        },
        {
            articleLink: 'https://thefeministwire.com/2016/03/june-jordans-songs-of-palestine/',
            title: 'June Jordan\'s Songs of Palestine and Lebanon',
            author: 'Therese Saliba',
            type: ReadingTopics.PALESTINE
        },
        {
            articleLink: 'https://www.yesmagazine.org/opinion/2023/02/13/june-jordan-legacy',
            title: 'June Jordan\'s Legacy of Solidarity and Love Remains Relevant',
            author: 'Sriram Shamasunder',
            type: ReadingTopics.PALESTINE
        },
        {
            articleLink: 'https://muse.jhu.edu/article/576918/pdf',
            title: 'Reciprocal Solidarity: Where the Black and Palestinian Queer Struggles Meet',
            author: 'Sa\'ed Atshan and Darnell L. Moore',
            type: ReadingTopics.PALESTINE || ReadingTopics.LGBTQIA
        },
        {
            articleLink: 'https://mondoweiss.net/2021/03/whose-feminism-palestines-feminism/',
            title: 'Whose Feminism? Palestine\'s Feminism',
            author: 'Nada Elia',
            type: ReadingTopics.PALESTINE
        },
        {
            articleLink: 'https://static1.squarespace.com/static/565c3d39e4b027c789ba5b70/t/591a3b91ff7c50a929cbf42d/1494891409152/The+Story+of+the+Girl.....pdf',
            title: 'The Story of the Girl Whose Birds Flew Away',
            author: 'Bushra al-Fadil Translated by Max Shmookler',
            type: ReadingTopics.SUDAN
        },
        {
            articleLink: 'https://www.african-writing.com/eight/yousifalmahri.htm',
            title: 'Stirring Ashes',
            author: 'Yousif Izzat AlMahri',
            type: ReadingTopics.SUDAN
        },
        {
            articleLink: 'https://arablit.org/2024/04/04/new-short-fiction-from-sudan-the-drunken-donkey/',
            title: 'The Drunken Donkey',
            author: 'Dr. Abuelgasim Gour Translated by Nassir al-Sayeid al-Nour',
            type: ReadingTopics.SUDAN
        },
        {
            articleLink: 'https://wams.nyhistory.org/growth-and-turmoil/growing-tensions/marsha-p-johnson/',
            title: 'Life Story: Marsha P. Johnson (1945-1992)',
            author: 'Women & The American Story',
            type: ReadingTopics.LGBTQIA
        },
        {
            articleLink: 'https://www.nps.gov/articles/000/marsha-p-johnson-sylvia-rivera.htm',
            title: 'Marsha P. Johnson & Sylvia Rivera',
            author: 'Alexandra Burgos for NPS Cultural Landscapes Program',
            type: ReadingTopics.LGBTQIA
        },

        {
            articleLink: 'https://www.theatlantic.com/magazine/archive/2018/02/trayvon-martin-martin-luther-king-jr/552596/',
            title: 'Martin Luther King Jr. Mourns Trayvon Martin',
            author: 'Lauren K. Alleyne',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://wams.nyhistory.org/growth-and-turmoil/feminism-and-the-backlash/angela-davis/',
            title: 'Life Story: Angela Davis (1944- )',
            author: 'Women & The American Story',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://www.pbs.org/wgbh/pages/frontline/shows/race/interviews/davis.html',
            title: 'Interview with Angela Davis',
            author: 'PBS',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://www.nytimes.com/2021/03/15/technology/artificial-intelligence-google-bias.html',
            title: 'Who Is Making Sure the A.I. Machines Aren\'t Racist?: ',
            author: 'Cade Metz',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://www.bowdoin.edu/news/2023/11/scholar-ruha-benjamin.html',
            title: 'Ruha Benjamin Reimagines Technology, Shares Ideas for Dismantling Discriminatory Design',
            author: 'Bowdoin',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://www.amnesty.org/en/location/africa/east-africa-the-horn-and-great-lakes/democratic-republic-of-the-congo/report-democratic-republic-of-the-congo/',
            title: 'DEMOCRATIC REPUBLIC OF THE CONGO',
            author: 'Amnesty International',
            type: ReadingTopics.CONGO
        },     
    ]
    return readings;
}

    


export default Readings;