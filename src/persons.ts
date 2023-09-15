import { v4 as uuidv4 } from 'uuid';

interface Meeting {
    startDatetime: Date,
    endDatetime: Date,
    type: 'online' | 'face-to-face',
    confirmed: boolean
    inProgress: boolean,
    name: string
} 

export interface Note {
    id: string
    date: Date,
    text: string,
    uploaded: string
}

export interface Video {
    name: string,
    startDatetime: Date | null,
    endDatetime: Date | null,
    videoSrc: string,
    previewImage: string,
    authorName: string,
}

export interface IEvent {
    name: string,
    datetime: Date,
    previewImage: string,
}

// for list in aside block
export interface PersonListItem {
    id: string
    firstName: string
    lastName: string
    avatar: string | null
    telegram: boolean
    warning: boolean
    selected: boolean
}

// for detailed info in 
export interface Person extends PersonListItem {
    gender: 'male' | 'female',
    age: number,
    notes: Note[],
    meetings: Meeting[],
    videos: Video[],
    events: IEvent[],
}

export const personsInitial:Person[] = [
    {
        id: 'denis1',
        firstName: 'Денис',
        lastName: 'Рожков',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'rozhkov_denis.png',
        notes: [
            {
                id: uuidv4(),
                date: new Date(2019, 11, 20),
                text: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
                uploaded: ''
            },
            {
                id: uuidv4(),
                date: new Date(2019, 11, 20),
                text: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
                uploaded: 'mapNotes.png'
            }
        ],
        meetings: [
            {
                startDatetime: new Date(2019, 0, 15, 12, 30),
                endDatetime: new Date(2019, 0, 15, 13, 0),
                type: 'online',
                confirmed: true,
                inProgress: true,
                name: 'Online консультация'
            },
            {
                startDatetime: new Date(2019, 0, 15, 12, 30),
                endDatetime: new Date(2019, 0, 15, 13, 0),
                type: 'online',
                confirmed: true,
                inProgress: false,
                name: 'Online консультация'
            },
            {
                startDatetime: new Date(2019, 0, 15, 12, 30),
                endDatetime: new Date(2019, 0, 15, 13, 0),
                type: 'face-to-face',
                confirmed: false,
                inProgress: false,
                name: 'Личный прием'
            }
        ],
        videos: [
            {
                name: 'Крабик, ходьба в бок в приседе с двумя резинками Крафылвдылд',
                startDatetime: null,
                endDatetime: null,
                videoSrc: '',
                previewImage: 'krabik.png',
                authorName: 'Астахова Е.В.'
            },
            {
                name: 'Разминка для локтевого сустава',
                startDatetime: new Date(2019, 0, 15, 0, 0),
                endDatetime: new Date(2019, 0, 22, 0, 0),
                videoSrc: '',
                previewImage: 'razminka.png',
                authorName: 'Астахова Е.В.'
            },
            {
                name: 'Разминка для локтевого суставаРазминка для локтевого сустава',
                startDatetime: new Date(2019, 0, 15, 0, 0),
                endDatetime: new Date(2019, 0, 22, 0, 0),
                videoSrc: '',
                previewImage: 'razminka-dlya.png',
                authorName: 'Астахова Е.В.'
            }
        ],
        events: [
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                datetime: new Date(2021, 3, 9, 17, 0),
                previewImage: 'tyaga.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                datetime: new Date(2021, 3, 9, 17, 0),
                previewImage: 'tyaga.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                datetime: new Date(2021, 3, 9, 17, 0),
                previewImage: 'tyaga.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                datetime: new Date(2021, 3, 9, 17, 0),
                previewImage: 'tyaga.png',
            },
        ], 
        selected: false
    },
    {
        id: 'alexnadra1',
        firstName: 'Александра',
        lastName: 'Кравцова',
        telegram: true,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'kravcova_alexandra.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'alexandra2',
        firstName: 'Александра',
        lastName: 'Кравцова',
        telegram: false,
        warning: true,
        gender:"male",
age: 30,
        avatar: 'kravcova_alexandra.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'alevtina1',
        firstName: 'Алевтина',
        lastName: 'Диброва',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'dibrova_alevtina.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'dmitriy1',
        firstName: 'Дмитрий',
        lastName: 'Иванов',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'ivanov-dmitriy.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'nosikov@list.ru',
        firstName: 'nosikov@list.ru',
        lastName: '',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: null,
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'alexander1',
        firstName: 'Александр',
        lastName: 'Форс',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'fors_alexandr.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'artur1',
        firstName: 'Артур',
        lastName: 'Ахмедов',
        telegram: false,
        warning: false,
        gender:"male",
        age: 30,
        avatar: 'ahmed_artur.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'rufina1',
        firstName: 'Руфина',
        lastName: 'Валиева',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'valieva_rufina.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'victoria1',
        firstName: 'Виктория Волошина',
        lastName: 'Валиева',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'voloshkina_victoria.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
    {
        id: 'victoria2',
        firstName: 'Виктория Волошина',
        lastName: 'Валиева',
        telegram: false,
        warning: false,
        gender:"male",
age: 30,
        avatar: 'voloshkina_victoria.png',
        notes: [],  
        meetings: [],   
        videos: [], 
        events: [], 
        selected: false
    },
];
