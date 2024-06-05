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
    ]
    return readings;
}

    


export default Readings;