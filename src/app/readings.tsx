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
            articleLink: 'https://nhcje.org/blog/marsha-p-johnson-the-transgender-activist-who-pioneered-the-fight-for-lgbtq-rights',
            title: 'Marsha P. Johnson: The Transgender Activist Who Pioneered the Fight for LGBTQ+ Rights',
            author: 'New Hampshire Center for Justice & Equity',
            type: ReadingTopics.LGBTQIA
        },
        {
            articleLink: 'https://www.theatlantic.com/magazine/archive/2018/02/trayvon-martin-martin-luther-king-jr/552596/',
            title: 'Martin Luther King Jr. Mourns Trayvon Martin',
            author: 'Lauren K. Alleyne',
            type: ReadingTopics.RACIAL_JUSTICE
        },
        {
            articleLink: 'https://kinginstitute.stanford.edu/king-papers/documents/our-struggle',
            title: 'Our Struggle',
            author: 'King, Martin Luther, Jr. (Montgomery Improvement Association)',
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