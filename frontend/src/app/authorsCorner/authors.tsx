'use client'

export enum AuthorChoices {
    JAMES_BALDWIN = 'James Baldwin',
    TONI_MORRISON = 'Toni Morrison',
    AUDRE_LORDE = 'Audre Lorde',
    BELL_HOOKS = 'Bell Hooks',
    ANGELA_DAVIS = 'Angela Davis',
    ALICE_WALKER = 'Alice Walker'
}

export default function Authors() {
    const authors = [
        {
            authorName: AuthorChoices.JAMES_BALDWIN,
            imageSrc: 'james-baldwin.png'
        },
        {
            authorName: AuthorChoices.TONI_MORRISON,
            imageSrc: 'toni-morrison.png'
        },
        {
            authorName: AuthorChoices.AUDRE_LORDE,
            imageSrc: 'audre-lorde.png'
        },
        {
            authorName: AuthorChoices.BELL_HOOKS,
            imageSrc: 'bell-hooks.png'
        },
        {
            authorName: AuthorChoices.ANGELA_DAVIS,
            imageSrc: 'angela-davis.png'
        },
        {
            authorName: AuthorChoices.ALICE_WALKER,
            imageSrc: 'alice-walker.jpeg'
        }
    ]
}